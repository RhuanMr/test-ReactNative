export const timeSplit = (item) => {
    const arr = item.split("T")
    const arr2 = arr[1].split(":")
    const minutes = arr2[1].split(".")
    const adjusteHour = parseInt(arr2[0])
    const final = `${adjusteHour-3}:${minutes[0]}`
    return final
}