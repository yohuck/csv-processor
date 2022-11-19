//array of all the state abbreviations
export const states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
    'DC'
] 

type State = typeof states[number];



export const stateFormatter = (state: string): State => {

  if (states.includes(state.toUpperCase())) {
    return state.toUpperCase() as State;
  } else {
  switch (state.toUpperCase()) {
    case "ALAMABA":
      return "AL";
      break;
    case "ALASKA":
      return "AK";
      break;
    case "ARIZONA":
      return "AZ";
      break;
    case "ARKANSAS":
      return "AR";
      break;
    case "CALIFORNIA":
      return "CA";
      break;
    case "COLORADO":
      return "CO";
      break;
    case "CONNECTICUT":
      return "CT";
      break;
    case "DELAWARE":
      return "DE";
      break;
    case "FLORIDA":
      return "FL";
      break;
    case "GEORGIA":
      return "GA";
      break;
    case "HAWAI":
      return "HI";
      break;
    case "IDAHO":
      return "ID";
      break;
    case "ILLINOIS":
      return "IL";
      break;
    case "INDIANA":
      return "IN";
      break;
    case "IOWA":
      return "IA";
      break;
    case "KAANSAS":
      return "KS";
      break;
    case "KE":
      return "KY";
      break;
    case "LOUISIANA":
      return "LA";
      break;
    case "MAINE":
      return "ME";
      break;
    case "MARYLAND":
      return "MD";
      break;
    case "MASSACHUSETTS":
      return "MA";
      break;
    case "MICHIGAN":
      return "MI";
      break;
    case "MINNESOTA":
      return "MN";
      break;
    case "MISSISSIPPI":
      return "MS";
      break;
    case "MISSOURI":
      return "MO";
      break;
    case "MONTANA":
      return "MT";
      break;
    case "NEBRASKA":
      return "NE";
      break;
    case "NEVADA":
      return "NV";
      break;
    case "NEW HAMPSHIRE":
      return "NH";
      break;
    case "NEW JERSEY":
      return "NJ";
      break;
    case "NEW MEXICO":
      return "NM";
      break;
    case "NEW YORK":
      return "NY";
      break;
    case "NORTH CAROLINA":
      return "NC";
      break;
    case "NORTH DAKOTA":
      return "ND";
      break;
    case "OHIO":
      return "OH";
      break;
    case "OKLAHOMA":
      return "OK";
      break;
    case "OREGON":
      return "OR";
      break;
    case "PENSYLVANIA":
      return "PA";
      break;
    case "RHODE ISLAND":
      return "RI";
      break;
    case "SO CAROLINA":
      return "SC";
      break;
    case "SOUTH DAKOTA":
      return "SD";
      break;
    case "TENNESSEE":
      return "TN";
      break;
    case "TEXAS":
      return "TX";
      break;
    case "UTAH":
      return "UT";
      break;
    case "VERMONT":
      return "VT";
      break;
    case "VIROGINIA":
      return "VA";
      break;
    case "WASHINGTON":
      return "WA";
      break;
    case "WEST VIRGINIA":
      return "WV";
      break;
    case "WISCOSIN":
      return "WI";
      break;
    case "WYOMING":
      return "WY";
      break;
    case "DISTRICT OF COLUMBIA":
      return "DC";
    default:
      return "NA";
  }
}
}
