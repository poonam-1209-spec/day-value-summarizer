# Day Value Summarizer

### Task
Given a dictionary with dates (YYYY-MM-DD) as keys and integer values, return a dictionary with the sum of values for each weekday.

If any weekday is missing, its value is the mean of the previous and next days.

### Example
**Input**
```js
{
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2
}
