import {getPokemonTag, pokemonDashRemove} from "./pokemon-string-functions"

/********************* TAG CONVERSION TEST ****************/
/***
 * INPUT can be STRING OR NUMBER in next format --> 3
 * OUTPUT is always STRING in next format --> #003
 */

const mockTagData = [
  { inputValue: 1, outputValue: "#001" },
  { inputValue: "1", outputValue: "#001" },
  { inputValue: 5, outputValue: "#005" },
  { inputValue: 41, outputValue: "#041" },
  { inputValue: "89", outputValue: "#089" },
  { inputValue: "3", outputValue: "#003" },
  { inputValue: 981, outputValue: "#981" },
  { inputValue: "774", outputValue: "#774" },
  { inputValue: 23, outputValue: "#023" },
  { inputValue: 60, outputValue: "#060" },
  { inputValue: 359, outputValue: "#359" },
]
const mockDashData = [
  { inputValue: "oran-berry", outputValue: "Oran berry" },
  { inputValue: "sitrus-berry", outputValue: "Sitrus berry" },
  { inputValue: "silver-powder", outputValue: "Silver powder" },
]

mockTagData.forEach((data) => {
  test("Number to # tag Conversion Function test", () => {
    let tagAddTest = getPokemonTag(data.inputValue)
    expect(tagAddTest).toBe(data.outputValue)
  })
})


mockDashData.forEach((data) => {
  test("Remove dash from string", () => {
    let dashRemove = pokemonDashRemove(data.inputValue)
    expect(dashRemove).toBe(data.outputValue)
  })
})

