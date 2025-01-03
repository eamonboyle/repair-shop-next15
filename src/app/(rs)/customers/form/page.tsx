import { BackButton } from "@/components/back-button";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as sentry from "@sentry/nextjs";

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId } = await searchParams;

        // edit customer form
        if (customerId) {
            const customer = await getCustomer(Number(customerId));

            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID # {customerId} not found
                        </h2>
                        <BackButton title="Go Back" />
                    </>
                );
            }

            console.log(customer);

            // put customer form component
            return <div>{customer.firstName}</div>;
        } else {
            // create customer form component
            return <div>Create customer</div>;
        }
    } catch (error) {
        if (error instanceof Error) {
            sentry.captureException(error);
            throw error;
        }
        throw new Error("An unknown error occurred");
    }
}
