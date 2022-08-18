# REACT USEHOOKS-TS USEINTERVAL

## Resources

- [USEHOOKS-TS useInterval](https://usehooks-ts.com/react-hook/use-interval)
- [Paige's blog on polling with useInterval](https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197)

## Features

- can pass `null` to stop interval updates

## Polling Example

call an api on an interval to update
BONUS still makes initial call to fetch api data

```tsx
const ZipCodeWeather: FC<ZipCodeWeatherProps> = (
  props: ZipCodeWeatherProps,
) => {
  const [data, setData] = useState<Weather | null>(null)

  const updateWeatherDataByZip = useCallback(async () => {
    const data = await getWeatherDataByZip(props.zipcode)
    setData(data)
  }, [props.zipcode])

  useInterval(updateWeatherDataByZip, REFRESH_INTERVAL_MS)

  useEffect(() => {
    updateWeatherDataByZip()
    return () => {}
  }, [updateWeatherDataByZip])

  return <>...</>
}
```
