const gitPullCron=require('git-pull-cron');
/* Original example code by hiddentao */
/* Example was modified by 6100m */
/* Schedules cron to run every weekday (Mon-Fri) at 11:30am */
gitPullCron.init('git://github.com/TwitchPlaysPokemon/tpp-core.git','/var/schemas/vulcan','00 30 11 * * 1-5',function(err,commit) {
  if (err) {
    return console.error(err.stack);
  }
  console.log('Updated to commit: '+commit.id);
});
