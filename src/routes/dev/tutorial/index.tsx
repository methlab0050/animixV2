import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './style.css?inline'

// This might look complicated
export default component$(()=>{
    // but I swear it isn't (go to line 22)
    useStyles$(styles)
    return <>
        <p>
            Yeah, so, this is how you use a tsx file
        <br />
            You would only need to use a tsx file in this stage if you need to use custom styling that,
        <br />
            For some reason or other, you can not put in the global.css in the ./src directory
        <br /><br />
            Here, I made <u>underlines brown</u>
        <br /><br />
            Remember to try to use the global styles whenever possible
        </p>
    </>
});


// Here I have an anonymous function

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const anonymous_function = (num: number) => {
    return num + 1
}

// you can probably tell what this does.
// functions like these are called anonymous because they technically don't need a name

(num: number) => {
    return num + 1
}

// functions in tsx files can actually return html, like you saw before

() => {
    return <> hai!!! </>
}

// to make this function into a page, we have to do a couple things to it.
// the first is, we have to tell the framework that this html is a component of our website
// we do that by wrapping it in component$( )
component$(() => {
    return <> hai!!! </>
})
//next, we export it as the default

// export default component$(() => {
//     return <> hai!!! </>
// })

// this is commented out, because you can only "export default" once per file
// if we want to add styles, we can import the styles (see line 2)
// and then tell the framework to use those styles for this page with useStyles$()
// and voila!

