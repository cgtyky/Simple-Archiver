# Simple-Archiver
Creating a simple archiving tool using Node

Script reads a certain folder for newly downloaded movie folders. 
If there is a new movie folder, script will trim its name without touching original folder name. 
Then add it to a certain .txt file, which should have been created before.
After handling the entry to .txt file, script will move downloaded folder to a certain folder.

Script requires 'fs-extra' npm module and 'os' node module.

Change "./target" to read correct folder for download. (There are 2 occurence of "./target", change both)
Change "movie-list.txt" to append movie names to your list.
Change "./move-target" to move downloaded folders to desired location.
