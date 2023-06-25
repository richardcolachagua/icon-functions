FileUoload Icon Component

This is a React component that allows you to upload a file. The component imports React and useState from the "react" library, and Box from the "@mui/material" library. It also imports the AttachFileIcon from the "@mui/icons-material/AttachFile" library. The component is exported as the default export.

The component defines a state variable called 'selectFile' using the 'useState' hook. The initial value of 'selectedFile' is `null`. The component also defines a function called 'handleFileChange' that takes an event as an argument. When called, this function sets the 'selectedFile' state variable to the first file in the `event.target.files` array.

The component returns a Box component with the `display` and `alignItems` props set to "flex" and "center", respectively. Inside the Box component, there is a label element with the `htmlFor` prop set to "file-upload". The label contains an AttachFileIcon component. Below the label, there is an input element with the `id` prop set to "file-upload", the `type` prop set to "file", and the `onChange` prop set to the `handleFileChange` function. The input element also has a `style` prop that set the `display` property to "none". Finally, the component condtionally renders a paragraph element with the name of the selected file if `selectedFile` is not null.

This component can be used as a building block for more complex file upload functionality in a React application.

---

FileUpload Icon Component
This code is a React component that allows a user to upload a photo. The component imports React and useRef from the "react" library, and InsertPhotoIcon from the "@mui/icons-material/InsertPhoto" library. The component is exported as the default export.

The component defines a state variable called fileInputRef using the useRef hook. The initial value of fileInputRef is null. The component also defines two functions: handleFileInputChange and handleIconClick. The handleFileInputChange function takes an event as an argument and sets the file state variable to the first file in the event.target.files array. The handleIconClick function is called when the user clicks on the InsertPhotoIcon component and it triggers a click event on the fileInputRef element.

We added a state variable called `imageSrc` using the `useState` hook, with an initial value of `null`. Inside the `handleFileInputChange` function, we create a URL representing the selected file using `URL.createObjectURL(file)` and update the `imageSrc` state variable with the created URL. Fianlly, we condtionally render an `img` element with the `src` attribute set to `imageSrc` if its not `null`.

The component returns an InsertPhotoIcon component with the `onClick` prop set to the `handleIconClick` function. Below the InsertPhotoIcon component, there is an input element with the `type` prop set to "file", the `accept` prop set to "image/\*", the `ref` prop set to the `fileInputRef` state variable, the `style` prop that sets the `display` property to "none", and the `onChange` prop set to the `handleFileInputChange` function. This component can be used as a building block for more complex photo upload functionality in a react application.

---

MicOff Icon Component

This is a React component that represents a chat person. The component imports React, useState, and Box from the "react" and "@mui/material" libraries, respectively. It also imports the MicOffIcon and MicIcon from the "@mui/icons-material" library. The comoonent is exported as the default export.

The component defines a state variable called `notificationsEnabled` using the `useState` hook. The initial value of `notificationsEnabled` is `true`. The component also defines two functions: `handleMicOffClick` and `handleMicClick`. The `handleMicOffClick` function sets the `notificationsEnabled` state variable to `false`, and the `handleMicClick` function sets the `notifcationsEnabled` state variable to `true`.

The component returns a Box component with the 'display' and 'alignItems' props set to "flex" and "center", respectively. Inside the Box component, there is a paragraph element with the `name` prop passed as a prop from the parent component. Below the paragraph element, there is a MicOffIcon component with the `OnClick` prop set to the `handleMicOffClick` functoin if `notificationsEnabled` is `true`. If `notificationsEnabled` is `false`, the component conditionally renders another Box component with the `display` and `alignItems` props set to "flex" and "center", respectively. Inside this Box component, there is a paragraph element wit the text "Notifications disabled" and a MicIcon component with the `OnClick` prop set to the `handleMicClick` function.

This component can be used as a building block for more complex file upload functionality in a React application.
