# basic-html-components
This webpackage contains components that wraps html elements.

## Docs
The generated documentation for this webpackage and its artifacts is available [here][wpDocs].

## Artifacts of the webpackage
| Name | Type | Description | Links |
|--------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| **cubx-input** | Elementary component | Wrap the input html component | [Demo][demoInput], [Docs][docsInput] |
| **cubx-email-input** | Compound component | Wrap the email type of the input html component | [Demo][demoEmailI], [Docs][docsEmailI] |
| **cubx-file-input** | Compound component | Wrap the file type of the input html component | [Demo][demoFileI], [Docs][docsFileI] |
| **cubx-image-input** | Compound component | Wrap the image type of the input html component | [Demo][demoImageI], [Docs][docsImageI] |
| **cubx-month-input** | Compound component | Wrap the month type of the input html component | [Demo][demoMonthI], [Docs][docsMonthI] |
| **cubx-number-input** | Compound component | Wrap the number type of the input html component | [Demo][demoNumberI], [Docs][docsNumberI] |
| **cubx-color-input** | Compound component | Wrap the color type of the input html component | [Demo][demoColorI], [Docs][docsColorI] |
| **cubx-date-input** | Compound component | Wrap the date type of the input html component | [Demo][demoDateI], [Docs][docsDateI] |
| **cubx-datetime-local-input** | Compound component | Wrap the datetime-local type of the input html component | [Demo][demoDateTLI], [Docs][docsDateTLI] |
| **cubx-week-input** | Compound component | Wrap the week type of the input html component | [Demo][demoWeekI], [Docs][docsWeekI] |
| **cubx-url-input** | Compound component | Wrap the url type of the input html component | [Demo][demoUrlI], [Docs][docsUrlI] |
| **cubx-tel-input** | Compound component | Wrap the tel type of the input html component | [Demo][demoTelI], [Docs][docsTelI] |
| **cubx-time-input** | Compound component | Wrap the time type of the input html component | [Demo][demoTimeI], [Docs][docsTimeI] |
| **cubx-text-input** | Compound component | Wrap the text type of the input html component | [Demo][demoTextI], [Docs][docsTextI] |
| **cubx-search-input** | Compound component | Wrap the search type of the input html component | [Demo][demoSearchI], [Docs][docsSearchI] |
| **cubx-radio-button** | Compound component | Wrap the radio type of the input html component | [Demo][demoRadioB], [Docs][docsRadioB] |
| **cubx-checkbox** | Compound component | Wrap the checkbox type of the input html component | [Demo][demoCheckbox], [Docs][docsCheckbox] |
| **cubx-img** | Elementary component | Wrap the img html component | [Demo][demoImg], [Docs][docsImg] |
| **cubx-ol** | Elementary component | Wrap the ol html component | [Demo][demoOl], [Docs][docsOl] |
| **cubx-p** | Elementary component | Wrap the p html component | [Demo][demoP], [Docs][docsP] |
| **cubx-button** | Elementary component | Wrap the button html component | [Demo][demoButton], [Docs][docsButton] |
| **cubx-textarea** | Elementary component | Wrap the textarea html component | [Demo][demoTextarea], [Docs][docsTextarea] |
| **cubx-ul** | Elementary component | Wrap the ul html component | [Demo][demoUl], [Docs][docsUl] |
| **cubx-select** | Elementary component | Wrap the select html component | [Demo][demoSelect], [Docs][docsSelect] |
| **cubx-label-output** | Elementary component | Simple static output of "label text" | |

## Use of components

The html file should contain the desire component using its tag, e.g. the `<cubx-email-input>`, as follows:

```html
<cubx-email-input cubx-webpackage-id="com.incowia.basic-html-components@1.0"></cubx-email-input>
```

This component can be optionally initialized using the `<cubx-core-slot-init>` tag (available from _cubx.core.rte_ version 1.9.0). For example, lets initilize the 'value' slot as follows:

```html
<cubx-email-input cubx-webpackage-id="com.incowia.basic-html-components@1.0">
        <!--Initilization-->
        <cubx-core-init>
                <cubx-core-slot-init slot="value">"myemail@email.com"</cubx-core-slot-init>
        </cubx-core-init>
</cubx-email-input>
```
Or it can be initialized and later manipulated from Javascript as follows:

```javascript
var emailInput= document.querySelector('cubx-email-input');

// Wait until Dependency Manager is ready
document.addEventListener('crcDepMgrReady', function() {
	// Manipulate slots
	emailInput.setValue('myemail@email.com');
});
```

The same process is valid for the other components.

[wpDocs]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/docs/index.html

[demoInput]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-input/demo/index.html
[docsInput]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-input/docs/index.html

[demoEmailI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-email-input/demo/index.html
[docsEmailI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-email-input/docs/index.html

[demoFileI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-file-input/demo/index.html
[docsFileI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-file-input/docs/index.html

[demoImageI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-image-input/demo/index.html
[docsImageI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-image-input/docs/index.html

[demoMonthI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-month-input/demo/index.html
[docsMonthI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-month-input/docs/index.html

[demoNumberI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-number-input/demo/index.html
[docsNumberI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-number-input/docs/index.html

[demoColorI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-color-input/demo/index.html
[docsColorI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-color-input/docs/index.html

[demoDateI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-date-input/demo/index.html
[docsDateI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-date-input/docs/index.html

[demoDateTLI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-datetime-local-input/demo/index.html
[docsDateTLI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-datetime-local-input/docs/index.html

[demoWeekI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-week-input/demo/index.html
[docsWeekI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-week-input/docs/index.html

[demoUrlI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-url-input/demo/index.html
[docsUrlI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-url-input/docs/index.html

[demoTelI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-tel-input/demo/index.html
[docsTelI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-tel-input/docs/index.html

[demoTimeI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-time-input/demo/index.html
[docsTimeI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-time-input/docs/index.html

[demoTextI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-text-input/demo/index.html
[docsTextI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-text-input/docs/index.html

[demoSearchI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-search-input/demo/index.html
[docsSearchI]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-search-input/docs/index.html

[demoRadioB]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-radio-button/demo/index.html
[docsRadioB]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-radio-button/docs/index.html

[demoCheckbox]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-checkbox/demo/index.html
[docsCheckbox]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-checkbox/docs/index.html

[demoImg]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-img/demo/index.html
[docsImg]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-img/docs/index.html

[demoOl]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-ol/demo/index.html
[docsOl]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-ol/docs/index.html

[demoP]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-p/demo/index.html
[docsP]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-p/docs/index.html

[demoButton]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-button/demo/index.html
[docsButton]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-button/docs/index.html

[demoTextarea]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-textarea/demo/index.html
[docsTextarea]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-textarea/docs/index.html

[demoUl]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-ul/demo/index.html
[docsUl]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-ul/docs/index.html

[demoSelect]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-select/demo/index.html
[docsSelect]: https://cubbles.world/shared/com.incowia.basic-html-components@1.0/cubx-select/docs/index.html

[Want to get to know the Cubbles Platform?](https://cubbles.github.io)
