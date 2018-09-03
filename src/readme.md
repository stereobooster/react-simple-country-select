### Default

```js
<CountrySelect />
```

### Phone code

```js
<CountrySelect
  option={({cca2, flag, name, code}) => (
    <option value={code} key={cca2}>
      {`${flag} +${code}`}
    </option>
  )}
/>
```
