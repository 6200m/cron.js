const gitPullCron=require('git-pull-cron-mod');
/* Original example code by hiddentao */
/* Example was modified by 6100m */
/* Schedules cron to run every weekday (Mon-Fri) at 11:30am */
gitPullCron.init('git://github.com/WiiLink24-Extensions/Wiierd.git','/var/share/wiierd','00 30 11 * * 1-5',function(err,commit) {
  if (err) {
    return console.error(err.stack);
  }
  console.log('Updated to commit: '+commit.id);
});

