# git-pull-cron<br>
For compiling WiiLink24's custom version, you will need to run ```compile.js``` firstly to generate the gruntfile.<br>
Then to test the functionality, run ``test.js`` to test it.<br>
Then finally, choose the production script you want to run.<br>
The current ones we have made:<br>
```
run.js -- File-Maker updating script, which saves WiiLink24 a lot of work with this particular one!
---------------------------------------------------------------------------------------------------
More coming soon!
```
Before that however, you will need to install the FS module as well.<br>
This module, along with it's customizations, provides the functionality of Git cloning a repo into a folder and scheduling a cron job to pull updates from the remote origin.<br>
## Installation<br>
```bash
$ npm install git-pull-cron
```
## Usage<br>
```javascript
var gitPullCron = require('git-pull-cron');
/*
- Clone given repo into /dev/my-repo, replacing what's already there
- Schedule cron to run every weekday (Mon-Fri) at 11:30am
- When cron task runs, a `git pull origin master` will be performed
- Once cron task has run the callback will get invoked with latest commit info
 */
gitPullCron.init('git://my-domain.com/my-repo.git', '/dev/my-repo', '00 30 11 * * 1-5', function(err, commit) {
  if (err) {
    return console.error(err.stack);
  }

  console.log('Updated to commit: ' + commit.id);
});
```
## API<br>
### .init(gitRepoUrl, localFolderPath, cronSpec, updateCallback)
Clone remote Git repository to given local folder path and schedule a cron job <br>
to `git pull` updates.<br>

**Params:**<br>

  * `gitRepoUrl` - URL to remote git repo, should be actionable by `git` command-line executable.
  * `localFolderPath` - Where the repository should be cloned to in the filesystem. Will get clobbered prior to cloning.
  * `cronSpec` - The cron schedule spec, see [cron](https://www.npmjs.org/package/cron)
  * `updateCallback` - OPTIONAL. A callback `(err, commit)` which gets invoked for every update performed. The `commit` parameter is an instance of [`Commit` from gift](https://www.npmjs.org/package/gift).
<br>

**Returns:** A `Promise` which resolves to the [`CronJob`](https://www.npmjs.org/package/cron) instance.

### .jobs
The current list of ``CronJob`` instances that have been setup through ``init()``. <br>
This is useful in case you wish to modify or stop cron jobs.<br>

## LICENSE
``MIT`` - see ``LICENSE.md``
<br>
