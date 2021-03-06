# Wait!
Huh?
## I... I don't wanna set the whole thing up. I wanna setup a specific category.
Ok, ```click``` [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#indvidual-category-setup-guides) to view the documentation on that.
# How to Compile<br>
```For``` ```compiling``` ```WiiLink24's``` ```custom``` ```version```, ```you``` will ```need``` ```to``` ```install``` the ```FS``` ```module```, ```follow``` the ```enviroment``` ```setup``` ```guide``` ```inside``` this ```README```  ```and``` ```after``` ```clicking``` [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#enviroment-runtime-setup-docs) ```and``` ```viewing``` ```it``` ```and``` ```following``` ```it```, ```finally``` ```do``` ```the``` ```following```:<br>
- Firstly, ```run``` ```node compile.js``` ```to``` ```generate``` the ```Gruntfile.coffee``` ```file```.<br>
- Secondly, ```run``` ```node generate.js``` ```to``` ```generate``` the ```.npmignore``` ```file```.<br>
- Thirdly, ```run``` ```node rcgen.js``` ```to``` ```generate``` the ```.jshintrc``` ```file```.<br>
- Fourthly, ```run``` ```node packagegen.js``` ```to``` ```generate``` the ```package.json``` ```file```.<br>
- Fifthly, ```run``` ```node clean.js``` to ```remove``` ```unneeded```  ```files``` ```to``` ```clean``` your ```installation``` ```up```.<br>
- Sixthly,```run``` ```npm install``` to ```install``` this ```module```.<br>
- Seventhly, ```run``` ```cd ../``` ```to``` ```prepare``` ```for``` ```finalization```.
- Seventhly ```run``` ```cp -r gitbottemp gitbot/node-modules/``` ```to``` ```setup``` the ```module``` ```installation```.
- Eightly, ```run``` ```cp -r gitbottemp gitbot/``` ```to``` ```finalize``` the ```module``` ```installation```.
- Ninthly, ```run``` ```rm -rf gitbottemp/``` ```to``` ```clean``` up ```temporary``` ```files``` from compiling.
- Then ```to``` ```test``` ```the``` ```functionality```, ```run``` ``node test.js`` ```to``` ```test``` it.<br>
- Then ```finally```, ```choose``` the ```production``` ```script``` ```you``` ```want``` ```to``` ```run```. ```while``` also ```following``` it's respective runtime docs and specific category docs if needed as well. Click [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#great-how-do-i-run-it) to view ```runtime``` ```docs``` ```and``` click [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#but-but-i-dont-wanna-set-the-whole-thing-up-i-wanna-setup-a-specific-category) to view ```specific``` ```category``` ```docs```.
- The ```current``` ```ones``` ```we``` have ```made```:<br>
# Current Scripts
```bash
filemaker.js -- File-Maker updating script, which saves WiiLink24 a lot of work with this particular one!
vulcan.js -- Vulcan schema updating script, which also saves WiiLink24 a lot of work with this particular one!
roomserver.js -- Room Server updating script, which saves Spotlight the work of having to manually pull commits.
wiinoma.js -- Wii No Ma compose repo updating script, which saves Spotlight the work of having to manually pull commits.
pbrupdater.js -- PBR Engine 2.0 updating script, which saves my buddies over at TPP the work of having to manually pull commits.
tppcore.js -- TPP Core updating script, which saves my buddies over at TPP the work of having to manually pull commits.
wiierd.js -- Wiierd error code system updating script, which saves Spotlight and WiiLink24 the work of having to manually pull commits.
```
# What does this do?
```bash
This module, along with it's customizations and heavy modifications, provides the functionality of Git cloning a repo into a folder and scheduling a cron job to pull updates from the remote origin.
```
## Great! How do I run it?
# filemaker.js Runtime Docs
```To``` ```run``` ```filemaker``` ```updater```,  ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/share/engine/
node filemaker.js
cd ../../../
```
# vulcan.js Runtime Docs
```To``` ```run``` ```vulcan``` ```updater```, ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/schemas/vulcan/
node vulcan.js
cd ../../../
```
# roomserver.js Runtime Docs
```To``` ```run``` ```roomserver``` ```updater```,  ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/share/roomserver/
node roomserver.js
cd ../../../
```
# wiierd.js Runtime Docs
```To``` ```run``` ```wiierd``` ```updater```,  ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/share/wiierd/
node wiierd.js
cd ../../../
```
# wiinoma.js Runtime Docs
```To``` ```run``` ```Wii``` ```No``` ```Ma``` ```production``` ```code``` ```updater```,  ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/share/wiinoma/
node wiinoma.js
cd ../../../
```
# pbrupdater.js Runtime Docs
```To``` ```run``` ```PBREngine``` 2.0 ```Updater```,  ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/other/tpp/0/data
node pbrupdater.js
cd ../../../
```
# tppcore.js Runtime Docs
```To``` ```run``` ```TPP``` ```Core``` ```Updater``` ```as``` a ```individual``` ```module```, do:
```bash
cd /var/share/gitbot/
mkdir /var/other/tpp/1/data
node tppcore.js
cd ../../../
```
# Enviroment Runtime Setup Docs
```To``` ```setup``` the ```enviroment```, do:
```bash
mkdir /var/
cd var
mkdir share/
mkdir schemas/
mkdir other/
mkdir other/tpp
mkdir other/tpp/0
mkdir other/tpp/1
cd share
mkdir gitbot
mkdir gitbottemp
git clone --recursive https://github.com/WiiLink24-Extensions/git-pull-cron gitbottemp/
mkdir gitbot/
mkdir gitbot/node-modules/
```
## But... but I don't wanna set the whole thing up. I wanna setup a specific category.
Ok, ```click``` [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#indvidual-category-setup-guides) to view the documentation on that.
## How to install the unmodified version, hiddentao's version that is.
```bash
bash
clear&&npm install git-pull-cron
```
## Usage of Unmodified Version
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
## Usage of Modified Version
```javascript
const gitPullCron = require('git-pull-cron-mod');
/* Original example code by hiddentao */
/* Example was modified by 6100m */
/* Schedules cron to run every weekday (Mon-Fri) at 11:30am */
gitPullCron.init('git://my-domain.com/my-repo.git','/dev/my-repo','00 30 11 * * 1-5', function(err,commit) {
  if (err) {
    return console.error(err.stack);
  }
  console.log('Updated to commit: '+commit.id);
});
```
## Indvidual Category Setup Guides
#### I want to setup the TwitchPlaysPokemon category and that category only.
I get the feeling! Please ```click``` [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#i-want-to-setup-twitchplayspokemon-stuff-only) to view the documentation on how to setup the TwitchPlaysPokemon category you want and that category only.
#### I want to setup the WiiLink24 category and that category only.
I get the feeling! Please ```click``` [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#i-want-to-setup-wiilink24-stuff-only) to view the documentation on how to setup the WiiLink24 category you want and that category only.
#### I want to setup the WiiConnect24 category and that category only.
I get the feeling! Please ```click``` [```here```](https://github.com/WiiLink24-Extensions/cron.js/blob/master/README.md#i-wanna-setup-wiiconnect24-stuff-only) to view the documentation on how to setup the WiiConnect24 category you want and that category only.
## API<br>
### .init(gitRepoUrl, localFolderPath, cronSpec, updateCallback)
```bash
Clones remote Git repository to given local folder path and schedule a cron job
to `git pull` updates.
```
**Params:**
  * `gitRepoUrl` - URL to remote git repo, should be actionable by `git` command-line executable.
  * `localFolderPath` - Where the repository should be cloned to in the filesystem. Will get clobbered prior to cloning.
  * `cronSpec` - The cron schedule spec, see [cron](https://www.npmjs.org/package/cron)
  * `updateCallback` - OPTIONAL. A callback `(err, commit)` which gets invoked for every update performed. The `commit` parameter is an instance of [`Commit` from gift](https://www.npmjs.org/package/gift).

**Returns:**
A `Promise` which resolves to the [`CronJob`](https://www.npmjs.org/package/cron) instance.<br>
### .jobs
The current list of ``CronJob`` instances that have been setup through ``init()``
```bash
This is useful in case you wish to modify or stop cron jobs.
```
## LICENSE
```bash
MIT - see LICENSE.md
```
## I want to setup TwitchPlaysPokemon stuff only.
Then do...
```bash
mkdir /var/
cd var
mkdir other/
mkdir other/tpp
mkdir other/tpp/0
mkdir other/tpp/1
mkdir other/tpp/0/data
mkdir other/tpp/1/data
cd share
mkdir gitbot/
mkdir gitbot/node-modules/
git clone --recursive https://github.com/WiiLink24-Extensions/git-pull-cron gitbottemp/
cd gitbottemp
npm install
cd ../
cp -r gitbottemp gitbot/node-modules/
cp -r gitbottemp gitbot/
rm -rf gitbottemp/
node test.js
```
### Then, to run the PBREngine 2.0 Updater, do:
```bash
cd /var/share/gitbot/
node pbrupdater.js
cd ../../../
```
### Then, to run the TPPCore updater, do:
```bash
cd /var/share/gitbot/
node tppcore.js
cd ../../../
```
Please click [here](https://github.com/WiiLink24-Extensions/cron.js#then-its-up-to-you-what-to-do-next) to view remaining instructions.<br><br>
## I want to setup WiiLink24 stuff only.
Then do...
```bash
mkdir /var/
cd var
mkdir schemas
mkdir share
mkdir schemas/vulcan/
mkdir share/wiinoma/
mkdir share/roomserver/
mkdir share/wiierd/
mkdir share/engine/
cd share
mkdir gitbot/
mkdir gitbot/node-modules/
git clone --recursive https://github.com/WiiLink24-Extensions/git-pull-cron gitbottemp/
cd gitbottemp
npm install
cd ../
cp -r gitbottemp gitbot/node-modules/
cp -r gitbottemp gitbot/
rm -rf gitbottemp/
node test.js
```
### Then, to run the Vulcan Updater, do:
```bash
cd /var/share/gitbot/
node vulcan.js
cd ../../../
```
### Then, to run the Wiierd updater, do:
```bash
cd /var/share/gitbot/
node wiierd.js
cd ../../../
```
### Then, to run the Wii No Ma production code updater, do:
```bash
cd /var/share/gitbot/
node wiinoma.js
cd ../../../
```
### Then, to run the Room Server updater, do:
```bash
cd /var/share/gitbot/
node roomserver.js
cd ../../../
```
### Then, to run the File Maker Updater, do:
```bash
cd /var/share/gitbot/
node filemaker.js
cd ../../../
```
Please click [here](https://github.com/WiiLink24-Extensions/cron.js#then-its-up-to-you-what-to-do-next) to view remaining instructions.<br><br>
## I wanna setup WiiConnect24 stuff only.
Then do...
```bash
mkdir /var/
cd var
mkdir schemas
mkdir share
mkdir schemas/vulcan/
mkdir share/engine/
cd share
mkdir gitbot/
mkdir gitbot/node-modules/
git clone --recursive https://github.com/WiiLink24-Extensions/git-pull-cron gitbottemp/
cd gitbottemp
npm install
cd ../
cp -r gitbottemp gitbot/node-modules/
cp -r gitbottemp gitbot/
rm -rf gitbottemp/
node test.js
```
### Then, to run the File Maker Updater, do:
```bash
cd /var/share/gitbot/
node filemaker.js
cd ../../../
```
### Then, to run the Vulcan Updater, do:
```bash
cd /var/share/gitbot/
node vulcan.js
cd ../../../
```
### Then, it's up to you what to do next.<br>
<br>
