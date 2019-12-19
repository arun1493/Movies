import componentMapping from "../../core-components/input";

export const movieTypes = {
popular: 'Popular',
trend: 'Trend',
newest: 'Newest',
topRated: 'Top Rated'
};

export const apiDataNormalizer = (apiData) => {
    const result = {};
    apiData.forEach(element => {
        let { id, ...rest} = element;
        result[id] = rest;
    });
    return result;
};

export const filterForm = "filterForm";
export const fields = [
  {
    name: "mediaType",
    component: componentMapping.dropDown,
    componentProps: {
      label: "Media Type",
      searchService: () =>
        Promise.resolve([
          {
            label: "Movies",
            value: "movies"
          },
          {
            label: "Serials",
            value: "serial"
          }
        ])
    }
  },
  {
    name: "genre",
    component: componentMapping.dropDown,
    componentProps: {
      label: "Genre",
      searchService: () =>
        Promise.resolve([
          {
            label: "Action",
            value: "action"
          },
          {
            label: "Comedy",
            value: "comedy"
          }
        ])
    }
  }
];


