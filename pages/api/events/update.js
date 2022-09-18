import moment from "moment"; // Time formatting
import prisma from "db"; // Import prisma

// --> /api/events/vote
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const new_data = req.body; // Collect vote data from POST

  const event = await prisma.events.findUnique({
    where: { id: new_data.id },
    select: {
      start_event_date: true,
      end_event_date: true,
    },
  });

  // Update event object
  await prisma.events.update({
    where: { id: new_data.id },
    data: {
      start_event_date: formatAsPGTimestamp(new_data.start_event_date),
      end_event_date: formatAsPGTimestamp(new_data.end_event_date),
    },
  });
  // Upon success, respond with 200
  res.status(200).send("Successful update");

};

/**
 * Converts moment date to Postgres-compatible DATETIME
 * @param {object} date Moment object
 * @returns {string} containing DATETIME
 */
function formatAsPGTimestamp(date) {
  return moment(date).toDate();
}
