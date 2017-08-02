# ng-speech-recognition
AngularJS directive for Speech Recognition, compatible Cordova and web application.

ng-speech-recognition is a simple AngularJS directive to add Speech Recognition feature to your Cordova (ionic) and AngularJS application.

### 1) What for?

ng-speech-recognition is a deadly simple directive to add [Google Web Speech API] (https://www.google.com/intl/en/chrome/demos/speech.html) to your AngularJS and Cordova mobile application. It is working with ionic Framework. You can still add the Cordova Plugin, but this is the lightest & clean solution to add Speech Recognition to your app in a snap of a finger!

The directive can be added to a button, when the user press & hold, it will trigger the Speech Recognition and when the button is finally released, you will get the result of the transcript in a global scope variable called $rootScope.transcript.
From there, you can do anything you want, display what was said or even create intelligent command in your app.

### 2) How to use it?

- Download the directive from there: [ng-speech-recognition] (https://github.com/Devniz/ng-speech-recognition/blob/master/www/js/directives/SpeechRecognitionDirective.js)

- Place the file SpeechRecognitionDirective.js into your project (directives folder by preference).

- Don't forget to reference this directive into your index.html file:

```
    <script src="js/directives/SpeechRecognitionDirective.js"></script>
```

- Add the directive to your AngularJS module by referencing app.directives in the modules section:

```
    angular.module('starter', ['ionic', 'app.directives'])
```

- Add the directive to your HTML button this way:

```
    <button ng-speech-recognition-start ng-speech-recognition-end="speech.displayTranscript()">
        Press & Talk
    </button>
```

Note that the ng-speech-recognition-start can also take a function callback if you want to do something specific when the Speech Recognition start:

```
    ng-speech-recognition-start="doSomethingCrazy()"
```

The ng-speech-recognition-end need a callback function to receive the final transcript result in raw text.


- Add manually the Microphone permission in platforms/android/AndroidManifest.xml file:

```
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
```

- Compile your application with [crosswalk] (https://crosswalk-project.org/) by typing this command (This solve any WebView compatibility issues):

```
    ionic plugin add cordova-plugin-crosswalk-webview
```

- When you install the app in your Android device, make sure that the Microphone permission are accepted:

```
    Check in the Settings > Application Manager > Select your App > Toggle the Microphone permission.
```

Et Voilà!

### 3) Troubleshooting.

If your button with the directive is not responding, make sure that you did build your app with Crosswalk and check that you accepted the Microphone permission, otherwise it will not trigger on hybrid app made with ionic Framework for example.

### 4) Demo:

You can clone this repository and start the ionic Demo using the Web Speech API:

```
    git clone https://github.com/Devniz/ng-speech-recognition
```

```
    npm install
```

```
    ionic serve
```

Play with Speech Recognition by holding the button "Press & Talk"! This will output what you said in the UI.


#### 5) Others.

- Add tests.
- Prompt automatically the user for Microphone permission.
- Make it work for AngularJS2 + ionic2
- Please feel free to send pull request if you think that this directive can be improved, I will have a look at it, asap!


