// Code generated by generate-maintenance-handler. DO NOT EDIT.
/* eslint-disable */
import EventsHandler from 'api/eventsHandler'
import MaintenancesStore from 'db/maintenances'
import MaintenanceUpdatesStore from 'db/maintenanceUpdates'
import { NotFoundError } from 'utils/errors'

export async function handle (event, context, callback) {
  try {
    const maintenanceID = event.params.maintenanceid
    const handler = new EventsHandler(new MaintenancesStore(), new MaintenanceUpdatesStore())
    const [maintenance, maintenanceUpdates] = await handler.getEvent(maintenanceID)

    callback(null, {...maintenance.objectify(), maintenanceUpdates: maintenanceUpdates.map(upd => upd.objectify())})
  } catch (error) {
    console.log(error.message)
    console.log(error.stack)
    switch (error.name) {
      case NotFoundError.name:
        callback('Error: an item not found')
        break
      default:
        callback('Error: failed to get an maintenance')
    }
  }
}
