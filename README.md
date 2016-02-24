# Windows System.IO.PathTooLongException file deleter

A file delete for handling windows System.IO.PathTooLongException which simply deletes the files which have a path greater than 260 characters.

## Running pathtoolong WILL delete files from your filesystem

This tool can be installed globally using:

`
  npm i pathtoolong -g
`

And than, before publishing a website or suffering somehow from System.IO.PathTooLongException simply run in your cmd:

`
  pathtoolong
`

In a directory to recursively search for problematic files and delete them.

Running this tool, you're hoping that the files stuck deep in he node_modules directory or any other long path location are not used and can be deleted.
