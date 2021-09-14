# Pastebin-API
Used to automatically submit text to Pastebin.

## Step 1
Download these files, and run this command:
> *npm install*

## Step 2
Create an account on Pastebin, log into it, then [go to this URL](https://pastebin.com/doc_api) and copy your Developer key. You will see it here like in the image below:  

![image](https://user-images.githubusercontent.com/11321449/133197408-50fb9e7f-3f8c-48aa-847f-104eafc03436.png)

## Step 3
Substitute in your Developer key, Pastebin username, and Pastebin password in these fields in the *Paste.js* file:
> 'api_dev_key' : 'Your_Developer_Key_Goes_Here',  
>'api_user_name' : 'Your_Username_Goes_Here',  
>'api_user_password' : 'Your_Password_Goes_Here'

## Step 4
In the Node CLI, while in the folder above *"Pastebin"*, run the command:
> node pastebin/paste.js

And then navigate to the relevant URL to test your work!
