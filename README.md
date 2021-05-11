

<div align="center">
    <img alt="Planteria" title="Planteria" src="https://github.com/myriankatto/planteria/blob/main/assets/Frame%205.png?raw=true" height='350' /></br></br>
    Planteria is a Plant Manager App that helps you to remember to take care of your plants. 
    
</div>


# :pushpin:  Table of Contents

* [Technologies](#technologies)
* [Screenshoots](#screenshoot)
* [How to run](#how-to-run)
* [Found a bug?](#bugs)
* [License](#license)

## 👩‍💻 Technologies <a name="technologies"></a>

This project was developed with:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :computer: Screenshoots <a name="screenshoots"></a>

<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
   <img src="https://github.com/myriankatto/planteria/blob/main/assets/mock5.png?raw=true" width="150px">
   <img src="https://github.com/myriankatto/planteria/blob/main/assets/mock3.png?raw=true" width="150px">
   <img src="https://github.com/myriankatto/planteria/blob/main/assets/mock1.png?raw=true" width="150px">
   <img src="https://github.com/myriankatto/planteria/blob/main/assets/mock2.png?raw=true" width="150px">
   <img src="https://github.com/myriankatto/planteria/blob/main/assets/mock4.png?raw=true" width="150px">
</div>

## :construction_worker: How to Run <a name="how-to-run"></a>

### Clone the repository to have a copy of the code on your machine

```bash
$ git clone https://github.com/myriankatto/planteria && cd planteria
```

### Load dependencies

```bash
$ yarn install
```

### Running the Json-server

The json server will give access to the images.

**To install**

```bash
$ yarn add -g json-server
```

**or**

```bash
$ npm install -g json-server
```

**To run it**

```bash
$ json-server ./src/services/server.json --host 192.168.0.119 --port 3333
```

Note that you must replace to IP Adress with yours, to find out what your IP is, just go to your cmd and run the following command:

```bash
$ ipconfig
```

NOTE: Choose the option: IPv4 address.
<br/>

Change the IP Address on the api file as well.

## Run the project

```bash
$ expo start
```

After doing this, the metro bundler will open in your browser. Some options for running the Application:

#### 1 - Android emulator

On the metro bundler page, click on "Run on Android device / emulator" and wait to load. Keep in mind that it is necessary to have gone through the process of installing the android sdk.

#### 2 - IOS Emulator

On the metro bundler page, click on "Run on iOS simulator" and wait to load.

#### 3 - Your smartphone

Download the Expo app:

- [iOS](https://itunes.apple.com/app/apple-store/id982107779)
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

After downloading, go back to the metro bundler page and scan the QR Code with the Expo app.

<em>For more details on how to run the app on an emulator or on your physical device, click <a href="https://react-native.rocketseat.dev/">on here</a>.</em>
<br />


## :bug: Issues <a name="bugs"></a>
Feel free to **file a new issue** with a respective title and description on the [Planteria](https://github.com/myriankatto/planteria/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

## :closed_book: License  <a name="license"></a>

Released in 2021 :closed_book: License. <br> For more information, access the file [LICENSE](https://github.com/myriankatto/planteria/blob/master/LICENSE).

<div align="center">
<sub>Built with 🖤 by <a href="https://github.com/myriankatto">Myrian Katto</a>.
  </sub>
  </div>
