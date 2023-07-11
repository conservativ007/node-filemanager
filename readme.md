# Hello everyone!

## I want to show you my cool file manager written in nodejs

#### all you need to do is copy this repository and change to this directory and then follow these instructions.

#### instructions:

first of all you need to start in your console:
`npm run start -- --username=your_username`

then use one of these commands

_Navigation_
Go to dedicated folder from current directory
`cd path_to_directory`

List all files and folder in current directory
`ls`

Go upper from current directory
`up`

_Operations with files_
Read file and print it's content in console:
`cut path_to_file`

Create empty file in current working directory:
`add new_file_name`

Rename file:
`rn path_to_file new_filename`

Copy file:
`cp path_to_file path_to_new_directory`

Move file (same as copy but initial file is deleted):
`mv path_to_file path_to_new_directory`

Delete file:
`rm path_to_file`

_Operating system info (prints following information in console)_
Get EOL (default system End-Of-Line)
`os --EOL`

Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
`os --cpus`

Get home directory:
`os --homedir`

Get current system user name
`os --username`

Get CPU architecture for which Node.js binary has compiled
`os --architecture`

_Hash calculation_
Calculate hash for file and print it into console
`hash path_to_file`
