import Deskshare from '/imports/api/deskshare';
import { logger } from '/imports/startup/server/logger';

Meteor.publish('deskshare', function (meetingId) {
  logger.info(`publishing deskshare for ${meetingId}`);
  return Deskshare.find({ meetingId: meetingId });
});
