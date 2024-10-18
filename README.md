# Clickjacker

## Description

A Clickjacking Template

This app is designed as a basic template for clickjacking. Simply an iframe with
an invisible div on top, executing any malicious script onclick. Wherever the
user clicks, the script is executed (this can also be altered to execute without
click (use onload, etc.)). 

Choose which website you would like to emulate (some with iframe protection
won't work, but most will), and then select the script you would like to run
whenever the user clicks on the page. 

### Disclaimer

Please Hack Responsibly. Only Hack With Permission. Or Don't Get Caught ;)

### Stack:

**Type**: NPM

**Structure**: HTML5

**Style**: CSS3

**Elements**: JavaScript

**Routes**: Node.js

## Installation

1) Open Terminal and Clone Repository:

```bash
git clone https://github.com/AmerikanischerAdler/clickjacker
```

2) Install Node.js Server

**Navigate to clickjacker Directory**

``` bash
cd clickjacker
```

**Initialize Application**

```bash
npm init -y
```

**Install Dependencies**

```bash
npm install express
```

3) Set Up Environment Variables:

Substitute your own target website URL for "my_site_url" 

**TIP**: Use full URL, ex: https://www.github.com

```bash
echo 'export SITE_URL="my_site_url"' >> ~/.bashrc
```

Do the same to set up your page title (should match the title of your target site), substituting its value for "my_site_title":

```bash
echo 'export SITE_TITLE="my_site_title"' >> ~/.bashrc
```

And now set a command to execute your malicious script:

*For a Shell Script (BASH)*

Simply substitute an absolute path to your script

```bash
echo 'export EXEC_CMD="/absolute/path/to/my/script.sh"' >> ~/.bashrc
```

**TIP**: Make sure you have the correct permissions to execute your bash script. If not, run:

```bash
chmod 777 /absolute/path/to/my/script.sh
```

*For a Python Script (Python3)*

```bash
echo 'export EXEC_CMD="python3 /absolute/path/to/my/script.py"' >> ~/.bashrc
```

**TIP**: This implies that you are using bash as your current shell. If not, run
the command, substituting your own shell config file for ".bashrc"

## Usage

1) Open Terminal

2) Navigate to clickjacker Directory:

```bash
cd clickjacker
```

4) Run Server:

*This will spin up a local backend server*

```bash
node server.js
```

**TIP**: To terminate your local server, press CTRL-C

4) Open Web Browser to New Tab or Window

5) Enter Server Address in Search Bar:

You may be able to simply click this link: http://127.0.0.1:3000/

## Contributions

Contributions are welcome from developers of all skill levels!


