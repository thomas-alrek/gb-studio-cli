# GB Studio CLI

[![LICENSE](https://img.shields.io/npm/l/gb-studio-cli.svg)](https://www.npmjs.com/package/gb-studio-cli)
[![Version](https://img.shields.io/npm/v/gb-studio-cli.svg)](https://www.npmjs.com/package/gb-studio-cli)
[![Downloads](https://img.shields.io/npm/dw/gb-studio-cli.svg)](https://www.npmjs.com/package/gb-studio-cli)

A CLI tool for compiling [GB Studio](https://github.com/chrismaltby/gb-studio) projects

## Installation

```bash
npm install gb-studio-cli -g
```

## Usage

```bash
gbstudio build [project] [destination] --type
```

| parameter | default | description |
|-----------|---------|-------------|
| project   | current directory | The path to the project which should be compiled |
| destination | project dirctory | (optional) The path where the compiled files should be stored |
| --type / -t | "rom" | How the project should be compiled ("rom" or "web") |
