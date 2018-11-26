# make-dir-range-cli

[![Current npm package version](https://img.shields.io/npm/v/make-dir-range-cli.svg)](https://www.npmjs.com/package/make-dir-range-cli) 

Make directories from ranges of integers.

## Installation

`npm install --global make-dir-range-cli`

## Usage

```
$ make-dir-range --help

  Make directories from ranges of integers.

  Usage
    $ make-dir-range <int>-<int>
  Options
       --destination, -d  Destination for dirs
       --prepend, -p  Prepend to dir name
       --append, -a  Append to dir name
  Example
    $ make-dir-range 1-50,55-60
```

```
$ make-dir-range 1-3,5,9-10

$ tree
.
├── 1
├── 2
├── 3
├── 5
├── 9
├── 10
│ ...
```

### With options:

```
$ make-dir-range 11-13,15 --destination out --append a --prepend p

$ tree
.
├── out
│   ├── p11a
│   ├── p12a
│   ├── p13a
│   └── p15a
│ ...
```

## Command Line/Shell Alias

### Windows

Follow the instructions on [this Stack Overflow answer](https://stackoverflow.com/a/21040825/8268314) to set up an alias on Windows.

### UNIX

```
alias mdr=make-dir-range
```

## Related

- [make-dir-range](https://github.com/hutsoninc/make-dir-range) - API for this module
- [copy-to-range-cli](https://github.com/hutsoninc/copy-to-range-cli) - Copy a file to a range of directories
- [move-to-range-cli](https://github.com/hutsoninc/move-to-range-cli) - Move files to corresponding directories given a range

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details