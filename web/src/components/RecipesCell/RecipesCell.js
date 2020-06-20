import { routes, navigate } from '@redwoodjs/router'
import { Form, Submit, FormError, useMutation } from '@redwoodjs/web'
import { empty } from 'apollo-link'

import RecipesListItem from 'src/components/RecipesListItem'

/**
 *
 * This cell generates a list of recipe items from the databank.
 *
 */
export const QUERY = gql`
  query {
    recipes {
      id
      title
      duration
      ingredients
      preparation
      nationality
      image
      author
      favorite
    }
  }
`
export const CREATE_RECIPE_MUTATION = gql`
  mutation createRecipe($input: CreateRecipeInput!) {
    createRecipe(input: $input) {
      title
      duration
      nationality
      ingredients
      preparation
      image
      author
      favorite
    }
  }
`
// this array contains default recipes for populating the db when the site is first launched.
let defaultRecipes = [
  {
    id: 'default_1',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Trofie alla Bolognese',
    duration: '90',
    nationality: 'ITA',
    ingredients: [
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '1/2', ingredient: 'Zwiebel' },
      { amount: '1', ingredient: 'Möhre' },
      { amount: '2', ingredient: 'Sellerie' },
      { amount: '200g', ingredient: 'Erbsen' },
      { amount: '500g', ingredient: 'Rindhackfleisch' },
      { amount: '2 Flaschen', ingredient: 'Tomatensoße' },
      { amount: '5 Blätter', ingredient: 'Basilikum' },
      { amount: '1 Prise', ingredient: 'Muskat-Pfeffer' },
      { amount: '1 Prise', ingredient: 'Salz' },
      { amount: '1 Prise', ingredient: 'Zucker' },
    ],
    preparation:
      'Olivenöl in den Topf. Zwiebel klein schneiden und auf Topf dünnsten. Sellerie und Möhre klein schneiden und hinzufügen. Rindhackfleisch hinzufügen und anbraten, dabei Muskat-Pfeffer und Salz nach belieben mitmischen. Wenn alles gebraten ist, Tomatesoße hinzufügen und Zucker. Alles ein Stunde kochen lassen. Danach Wasser im extra Topf kochen, Pasta hinzufügen und salzen. 10 min kochen lassen und dann mit Basilikum auf den Nudel servieren.',
    favorite: true,
    author: 'Claudia Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_2',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Guacamole',
    duration: '10',
    nationality: 'MEX',
    ingredients: [
      { amount: '2', ingredient: 'Avocado' },
      { amount: '1', ingredient: 'Tomate' },
      { amount: '1/2', ingredient: 'Zitrone' },
      { amount: '1', ingredient: 'Knoblauchzehe' },
      { amount: '1/2', ingredient: 'Zwiebel' },
      { amount: '3', ingredient: 'Chillischoten' },
      { amount: '1', ingredient: 'Salz' },
      { amount: '1', ingredient: 'Pfeffer' },
    ],
    preparation:
      'Tomaten, Knoblauch, Zwiebel, Chillischoten klein schneiden. Avocados mit einem Löffel aushüllen und zu den anderen Zutaten hinzufügen und mit Messer/Löffel/Gabel zerkleinern, dann Zitrone auspressen. Zuletzt mit einem Mixer alles zerkleinern und dabei Salz und Pfeffer hinzufügen. ',
    favorite: '../../../public/images/recipeDefaultImage.png',
    author: 'Ronny Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_3',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Gebackende Dorate',
    duration: '50',
    nationality: 'ITA',
    ingredients: [
      { amount: '4', ingredient: 'Dorade-Fische' },
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '4', ingredient: 'Knoblauchzehen' },
      { amount: '1 Prise', ingredient: 'Oregano' },
      { amount: '1 Prise', ingredient: 'Salz' },
      { amount: '1 Prise', ingredient: 'Pfeffer' },
      { amount: '1', ingredient: 'Zitrone' },
    ],
    preparation:
      'Fisch putzen und in Backform legen. Olivenöl mit Oregano, Salz, Knoblauch (kleingeschnitten) und Pfeffer in eine kleine Schüssel mischen. Mischung in und auf den Fisch füllen und in den Backofen bei 200 Grad Celsius schieben und 45 Min kochen lassen. Danach mit Zitrone servieren.',
    favorite: false,
    author: 'Claudia Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_4',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Penne mit Zuchini-Sahne-Soße',
    duration: '20',
    nationality: 'ITA',
    ingredients: [
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '1/2', ingredient: 'Zwiebel' },
      { amount: '1', ingredient: 'Knoblauchzehe(n)' },
      { amount: '1', ingredient: 'Zuchini' },
      { amount: '400ml', ingredient: 'Sahne' },
      { amount: '6', ingredient: 'Cherrytomaten' },
      { amount: '2', ingredient: 'Brühewürfel' },
      { amount: '500g', ingredient: 'Penne' },
      { amount: '1 Prise', ingredient: 'Parmesan' },
    ],
    preparation:
      'Olivenöl, Zwiebeln und Knoblauch kleingeschnitten mischen und dünsten lassen. Cherrytomaten und Zuchini klein schneiden und hinzumischen. Sahne hinzurühren und 20 Min kochen lassen. Danach ein Topf mit Wasser und Brühewürfel vorbereiten. Die Penne hinzufügen, sobald das Wasser kocht und 10 Min kochen lassen. Nudeln abgießen und in die Pfanne zur Sahne schmeißen und umrühren. Schließlich mit Parmesan servieren.',
    favorite: false,
    author: 'Claudia Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_5',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Sarma',
    duration: '110',
    nationality: 'TUR',
    ingredients: [
      { amount: '20', ingredient: 'Gekochte Weinblätter' },
      { amount: '5', ingredient: 'Getrocknete Paprika' },
      { amount: '5', ingredient: 'Getrocknete Aubergine' },
      { amount: '5', ingredient: 'Getrocknete Gurke' },
      { amount: '5', ingredient: 'Getrocknete (weiße) Zuchini' },
      { amount: '1,5 Tassen', ingredient: 'Reis' },
      { amount: '1 Bund', ingredient: 'Petersilie' },
      { amount: '5', ingredient: 'Knoblauchzehe(n)' },
      { amount: '5', ingredient: 'Zwiebeln' },
      { amount: '1', ingredient: 'Spitzpaprika' },
      { amount: '2TL', ingredient: 'Paprikamark' },
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '2TL', ingredient: 'Rapsöl' },
      { amount: '1 Prise', ingredient: 'Salz' },
      { amount: '2TL', ingredient: 'Paprikapulver' },
      { amount: '1 Prise', ingredient: 'Pfeffer' },
      { amount: '1 Prise', ingredient: 'Sumak-Eski' },
    ],
    preparation:
      'Für die Füllung folgende Zutaten kleinhacken, zusammenmischen und kochen: Reis, Petersilie, Knoblauch, Zwiebeln, Spitzpaprika, Paprikamark, Olivenöl, Rapsöl, Salz, Paprikapulver, Pfeffer, Sumak-Eski (oder Zitronensalz). Die Weinblätter damit füllen. Danach Olivenöl in den Topf geben und alle gefüllten Weinblätter darin stapeln. Den Topf mit Wasser füllen bis alles bedeckt ist. Dann etwas Salz und „Sumak eskisi“ darauf geben.',
    favorite: true,
    author: 'Silan Yüzükan',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_6',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Jägermeister-Soße für Burger',
    duration: '30',
    nationality: 'GER',
    ingredients: [
      { amount: '12cl', ingredient: 'Jägermeister' },
      { amount: '400ml', ingredient: 'Ketchup' },
      { amount: '250ml', ingredient: 'Cola' },
      { amount: '100ml', ingredient: 'Worchestersoße' },
      { amount: '25ml', ingredient: 'Ahornsirup' },
      { amount: '1/2TL', ingredient: 'Salz' },
    ],
    preparation:
      'Alle Zutaten in der richtigen Menge in einem Topf vermischen und bei mittlerer Hitze verrühren. Die Soße kann man nach Geschmack dickflüssiger machen, indem man weniger Cola und Worchestersoße nimmt.',
    favorite: false,
    author: 'Wenjie Wang',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_7',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Klassische Burger',
    duration: '60',
    nationality: 'USA',
    ingredients: [
      { amount: '800g', ingredient: 'Bio-Rinderhackfleisch' },
      { amount: '4', ingredient: 'XXL Burger-Buns' },
      { amount: '4', ingredient: 'Schmelzkäse' },
      { amount: '1', ingredient: 'Tomate' },
      { amount: '1', ingredient: 'Zwiebel' },
      { amount: '4 Blätter', ingredient: 'Eisbergsalat' },
      { amount: '8', ingredient: 'Zahnstocher' },
    ],
    preparation:
      'Alle Zutaten in der vorgegebenen Menge auf Tellern vorbereiten. Das Hackfleisch wird zuerst geknetet und dann in gleichmäßigen Portionen auf eine Pfanne gelegt. Die Bratzeit variert nach gewünschtem Zustand des Pattie (medium oder durch) und nach Hitze der Pfanne. Während des Braten etwas Salz auf den Patties verteilen und die Burger-Buns mit Schmelzkäse in den Ofen schieben. Sobald die Patties und die Buns fertig sind, diese mit den anderen Zutaten zu einem Burger zusanmmenlegen und mit ein, zwei Zahnstochern fixieren. Falls Soße zur Verfügung steht, kann diese als Abschluss noch über den Patties verteilt werden.',
    favorite: false,
    author: 'Wenjie Wang',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
  {
    id: 'default_8',
    image: '../../../public/images/recipeDefaultImage.png',
    title: 'Pilzsalat',
    duration: '30',
    nationality: 'GER',
    ingredients: [
      { amount: '2', ingredient: 'Romanosalate' },
      {
        amount: '500g',
        ingredient:
          'Verschiedene Pilzsorten (Steinpilz, Pfifferlingen, Austernpilze)',
      },
      { amount: '4', ingredient: 'Büffelmozarella' },
      { amount: '16', ingredient: 'Wildtomaten' },
      { amount: '1', ingredient: 'Avocado' },
      { amount: 'nach Geschmack', ingredient: 'Salatsoße' },
      { amount: '3 Zehen', ingredient: 'Knoblauch' },
      { amount: '1 Schuss', ingredient: 'Balsamico Creme' },
    ],
    preparation:
      'Alle Zutaten in der vorgegebenen Menge auf Tellern vorbereiten. Das Hackfleisch wird zuerst geknetet und dann in gleichmäßigen Portionen auf eine Pfanne gelegt. Die Bratzeit variert nach gewünschtem Zustand des Pattie (medium oder durch) und nach Hitze der Pfanne. Während des Braten etwas Salz auf den Patties verteilen und die Burger-Buns mit Schmelzkäse in den Ofen schieben. Sobald die Patties und die Buns fertig sind, diese mit den anderen Zutaten zu einem Burger zusanmmenlegen und mit ein, zwei Zahnstochern fixieren. Falls Soße zur Verfügung steht, kann diese als Abschluss noch über den Patties verteilt werden.',
    favorite: false,
    author: 'Wenjie Wang',
    createdAt: '00:00 Uhr, 25. Mai 2020',
  },
]

let emptyData = true
export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  /**
   *
   * The DB is empty when the website is launched for the very first time. We use the empty response here
   * to populate the DB with the above default recipes so the user has a basis to start with.
   *
   */
  const [create, { loading, error }] = useMutation(CREATE_RECIPE_MUTATION)
  if (emptyData) {
    // provide the user with some feedback when they first load the site.
    alert(
      "Cookbook empty! We're cooking up some delicious defaults for you. Page may require reloading. "
    )
    emptyData = false
    for (var i = 0; i < defaultRecipes.length; i++) {
      create({
        variables: {
          input: {
            title: defaultRecipes[i].title,
            duration: defaultRecipes[i].duration,
            nationality: defaultRecipes[i].nationality,
            ingredients: JSON.stringify(defaultRecipes[i].ingredients),
            preparation: defaultRecipes[i].preparation,
            image: defaultRecipes[i].image,
            author: defaultRecipes[i].author,
            favorite: defaultRecipes[i].favorite,
          },
        },
      })
    }
  }
  window.location.href = '/recipes'
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ recipes }) => {
  // sort recipes alphabetically and render them to the page.
  recipes.sort((a, b) => a.title.localeCompare(b.title))

  return recipes.map((recipe) => (
    // eslint-disable-next-line react/jsx-key
    <div
      key={recipe.id}
      style={styles.list}
      onClick={() => navigate(routes.recipe({ id: recipe.id }))}
    >
      <RecipesListItem
        key={recipe.id}
        title={recipe.title}
        duration={recipe.duration}
        nationality={recipe.nationality}
        favorite={recipe.favorite}
      />
    </div>
  ))
}

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
