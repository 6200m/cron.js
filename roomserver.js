const gitPullCron=require('git-pull-cron');
/*
- Schedules cron to run every weekday (Mon-Fri) at 11:30am
 */
gitPullCron.init('git://github.com/WiiLink24/room-server.git','/var/share/roomserver','00 30 11 * * 1-5',function(err,commit) {
  if (err) {
    return console.error(err.stack);}console.log('Updated to commit: '+commit.id);});
