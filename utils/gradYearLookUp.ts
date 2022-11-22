// checks grad year agains age group
// returns grad year
export const gradYearLookUp = (ageGroup?: string, gradYear?: string ): string => {

    if (gradYear){
       return Number( gradYear) < 2023 ? gradYear = 'NA' : Number(gradYear ) > 2027 ? gradYear = 'NA' : gradYear = gradYear;
    }

    switch (ageGroup) {
        case 'U18':
            return '2023';
            break;
        case 'U17':
            return '2024';
            break;
        case 'U16':
            return '2025';
            break;
        case 'U15':
            return '2026';
            break;
        case 'U14':
            return '2027';
            break;
        default:
            return 'NA';
            break;
    }
}


