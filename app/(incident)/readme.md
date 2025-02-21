# List of all science history

## Structure

```c
(incident)
├── -530
│   └── Discovery of the Pythagorean Theorem
│       ├── index.ts
│       ├── page.tsx
│       └── summary.tsx
├── 1609
│   └── Galileo’s First Telescopic Discoveries
│       ├── index.ts
│       ├── page.tsx
│       └── summary.tsx
└── Date of Incident
    └── Name of Incident
        ├── index.ts
        ├── page.tsx
        └── summary.tsx
```

Notice in the above example, we have a `-530`, the **dash** implies this is in the unit of **BCE** or else it is just CE like `1609` in the example above.

Under each date of incident, we will have list of incidents which is recognized by the name of incident. Then under each incident, we will have 3 mandatory files. The files are

- index.ts
- page.tsx
- summary.tsx

## index.ts

The format of this file is fixed. It is only used for more convenient import/export.

```ts
import Page from "./page";
import Summary from "./summary";

const incidentName = "Discovery of the Pythagorean Theorem";

export default Page;
export { incidentName, Summary };

```

## page.tsx

Latex is available through react-latex-next, this is the page that will be displayed and be used as a wiki.

```tsx
import Latex from "react-latex-next";

export default function Page() {
return (
    <>
        <Latex>$a^2 + b^2 = c^2$</Latex>
    </>
);
}
```

## summary.tsx

Latex is also available, this is the summary. Recommended length is as follows. Shorter will be fine. Longer will be cut off.

```tsx
export default function Summary() {
    return (
        <>
            Pythagoras established that the square of the hypotenuse equals the sum of the squares of the other two sides in a right triangle. This theorem became a key concept in geometry.
        </>
    );
}
```
