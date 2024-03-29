# REACT HOOKS USE CALLBACK

## Resources

- [React Hooks useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

## Features

- prevents unnecessary re-renders

## Re-use API call with setState

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
  }, [updateWeatherDataByZip])

  return <>...</>
}
```
