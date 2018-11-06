# make-dir-range-cli

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

With options:

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

Create a shell alias:

```
alias mdr=make-dir-range
```

## Related

- [make-dir-range](https://github.com/hutsoninc/make-dir-range) - API for this module

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details