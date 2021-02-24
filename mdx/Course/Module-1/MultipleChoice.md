---
title: "Multiple Choice"
slug: "multiple-choice"
contentType: "MultipleChoice"
correctAnswer: 5
---

## How do you write a question component?

Start with the prompt content.

```js
console.log("Including code snippets and markdown prose");
```

Try to phrase your questions carefully!

- There should be a single, unambiguous correct answer.
- The prompt should only contain relevant information.
- All the alternatives should be plausible, but mutually exclusive. Common student errors make the best distractors.

See [Writing Good Multiple Choice Test Questions](https://cft.vanderbilt.edu/guides-sub-pages/writing-good-multiple-choice-test-questions/) for more tips.

1. Then, the options, as items in an ordered list.
2. Remember, markdown lists can run over multiple lines
  as long as you indent on subsequent lines
3. They can have code inside the option, like this

  ```js
  console.log("Some code")
  ```

4. Be sure to indicate which number is the correct one with the `correct` key in the frontmatter!
5. In this case, number 5 is correct.


Optionally, you can include an explanation for the answer after the list of options.

Any content after the list of options will show only after the student has made a choice among the options and clicked "Check answer".

Questions should assess knowledge - students want feedback on their learning - but they should also be engaging and educational in their own right!