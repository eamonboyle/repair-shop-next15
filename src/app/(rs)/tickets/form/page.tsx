import { BackButton } from "@/components/back-button";
import { getTicket } from "@/lib/queries/getTicket";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as sentry from "@sentry/nextjs";

export default async function TicketFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId, ticketId } = await searchParams;

        if (!customerId && !ticketId) {
            return (
                <>
                    <h2 className="text-2xl mb-2">
                        Ticket ID or Customer ID required to edit a ticket
                    </h2>
                    <BackButton title="Go Back" />
                </>
            );
        }

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

            if (!customer.active) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID # {customerId} is not active
                        </h2>
                        <BackButton title="Go Back" />
                    </>
                );
            }
        }

        // edit ticket form
        if (ticketId) {
            const ticket = await getTicket(Number(ticketId));

            if (!ticket) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Ticket ID # {ticketId} not found
                        </h2>
                        <BackButton title="Go Back" />
                    </>
                );
            }

            const customer = await getCustomer(ticket.customerId);

            console.log("ticket", ticket);
            console.log("customer", customer);

            // return ticket form component
            return (
                <div>
                    Ticket ID # {ticketId} - {customer.firstName}
                </div>
            );
        }
    } catch (error) {
        if (error instanceof Error) {
            sentry.captureException(error);
            throw error;
        }
        throw new Error("An unknown error occurred");
    }
}
