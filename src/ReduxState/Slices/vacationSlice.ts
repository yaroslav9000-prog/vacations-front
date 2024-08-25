import { ObjectId } from 'mongodb';
import {createSlice} from "@reduxjs/toolkit";
import { Vacation } from "../../Models/Vacation";
import mongoose from 'mongoose';

export interface VacationsState{
    value: Vacation[] | null,
    state: 'idle'|'loading'|'failed'
}

const initialState: VacationsState = {
    value: [
        {"_id": new mongoose.Types.ObjectId("66a6bf4bf8650847cc74ef30"),
  "vacationDestination": "Melia Athens",
  "vacationDescription": "Upscale hotel near Omonoia Square Located close to National Archaeological Museum and National Theatre of Greece, Melia Athens provides a poolside bar, a rooftop terrace, and a coffee shop/cafe. Treat yourself to a massage at Wellness Area, the onsite spa. At the 3 on-site restaurants, enjoy breakfast, brunch, lunch, dinner, and Mediterranean cuisine. Stay connected with free in-room WiFi, and guests can find other amenities such as dry cleaning/laundry services and a fireplace in the lobby.",
  "startDateVacation": "12/08/2024",
  "endDateVacation": "14/08/2024",
  "vacationPrice": 426,
  "imageName": "melia_athens.jpeg"
},
{
  "_id": new mongoose.Types.ObjectId("66a77cfef8650847cc74ef34"),
  "vacationDestination": "Zocalo",
  "vacationDescription": "Zocalo, or Plaza de la Constitucion, is one of Mexico City's most popular spots that dates back to the Aztec era. It's a large and historic public plaza that never sleeps, always buzzing with traditional Aztec dancers and performers, cultural events, and even political demonstrations. The square is surrounded by beautiful architecture and landmarks, such as Palacio Bellas Artes and the Templo Mayor, making it a great starting point to explore the city. Be sure to join a city walking tour to learn more about the history and culture of Zocalo. Visit in the morning or late afternoon for fewer crowds",
  "startDateVacation": "11/09/2024",
  "endDateVacation": "21/09/2024",
  "vacationPrice": 600,
  "imageName": "zocalo_image.jpg"
},
{
    "_id": new mongoose.Types.ObjectId("66a77cfef8650847cc74ef35"),
    "vacationDestination": "Modrian South Beach",
    "vacationDescription": "Located on newly-fashionable West Avenue, Mondrian is just minutes from the center of South Beach, downtown Miami, Miami Design District, Wynwood Arts District, Venetian Causeway, Lincoln Road, Ocean Drive and Espanola Way.",
    "startDateVacation": "12/08/2024",
    "endDateVacation": "17/08/2024",
    "vacationPrice": 2137,
    "imageName": "mondrian_south_beach.jpg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66a77cfef8650847cc74ef36"),
    "vacationDestination": "Nigeria",
    "vacationDescription": "Explore the new Radisson Blu Hotel Lagos Ikeja, centrally located and just 5km from the Murtala Muhammed International Airport. Our brand new hotel in Lagos boasts 155 guestrooms, including 17 contemporary loft suites with first class amenities to ensure a comfortable and productive stay for work or play. Satisfy your cravings at the specialty Cut Steakhouse or our all-day dining restaurant, Iyeru Okin. Unwind under the sun by our outdoor pool and enjoy stunning city views, or get in a work out at our 24-hour fitness center.",
    "startDateVacation": "1/08/2024",
    "endDateVacation": "31/08/2024",
    "vacationPrice": 1500,
    "imageName": "kajuru_castle.jpg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66a78acff32213728f356b8b"),
    "vacationDestination": "Moscow",
    "vacationDescription": "The political, scientific, historical, architectural and business center of Russia, Moscow displays the country's contrasts at their most extreme. The ancient and modern are juxtaposed side by side in this city of 10 million. Catch a metro from one of the ornate stations to see Red Square, the Kremlin, the nine domes of St. Basil's Cathedral, Lenin's Mausoleum, the KGB Museum and other symbols of Moscow's great and terrible past, then lighten up and shop Boulevard Ring or people watch in Pushkin Square.",
    "startDateVacation": "29/09/2024",
    "endDateVacation": "13/10/2024",
    "vacationPrice": 1001,
    "imageName": "moscow.jpg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66c347f97a419f60ec1c511f"),
    "vacationDestination": "Britain-London",
    "vacationDescription": "With free Wi-Fi throughout, a 24 hour reception and a 24 hour meal and drinks menu, the Ibis London Blackfriars offers modern rooms in central London. Just 5 minutes’ walk from Waterloo Station, the Tate Modern is within 10 minutes on foot. Each bedroom comes with an en suite bathroom, a flat-screen TV and an iPod dock. All rooms have city views and come with ironing facilities and free toiletries. Charlie's Corner restaurant at ibis London Blackfriars - Charlie is the barman who works in the corner of the hotel that's always buzzing with life and cool music. The bar is dedicated to craft beer, great coffee, delicious bites and where music and cool vibes come together. Share good times at Charlie's Corner! The London Eye and Big Ben are within a 20-minute walk, while 10 minutes on the Jubilee line from Waterloo to Bond Street Tube Station provides access to the shops of Oxford Street. Couples particularly like the location — they rated it 9.1 for a two-person trip.",
    "startDateVacation": "29/08/2024",
    "endDateVacation": "7/08/2024",
    "vacationPrice": 1400,
    "imageName": "Britain-London.jpeg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66cb29f0dccc489d5b45e544"),
    "vacationDestination": "Canada",
    "vacationDescription": "World class skiing, decadent European style cuisine, ornamental cathedrals, peaceful island life…Canada is a patchwork of thriving cities and majestic wilderness. Montreal beckons travelers with its French charm and booming cultural landscape. In Toronto, the Art Gallery of Ontario is a vision of Frank Gehry architecture and national artistic treasures. The gleaming mountain ranges of Banff set a stunning backdrop for an exploration of the Canadian Rockies.",
    "startDateVacation": "17/08/2024",
    "endDateVacation": "25/08/2024",
    "vacationPrice": 4000,
    "imageName": "Canada.jpeg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66cb2b3ddccc489d5b45e546"),
    "vacationDestination": "Georgia",
    "vacationDescription": "Georgia (Georgian: საქართველო, romanized: sakartvelo, IPA: [sakʰartʰʷelo] ⓘ) is a transcontinental country in Eastern Europe[10][11][12] and West Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, Russia to the north and northeast, Turkey to the southwest, Armenia to the south, and Azerbaijan to the southeast. Georgia covers an area of 69,700 square kilometres (26,900 sq mi).[13] It has a population of 3.7 million,[b][14] of which over a third live in the capital and largest city, Tbilisi. Georgians, who are native to the region, constitute a majority of the country's population and are its titular nation.",
    "startDateVacation": "25/07/2024",
    "endDateVacation": "7/08/2024",
    "vacationPrice": 9999,
    "imageName": "Georgia.jpg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66cb2c48dccc489d5b45e547"),
    "vacationDestination": "Somalia",
    "vacationDescription": "We run private and group tours to both Somaliland in the north and Mogadishu in the south. Somaliland proclaimed itself independent from Somalia in 1991. Unlike the south of Somalia, the self-declared country has largely avoided unrest and is finally beginning to forge a reputation for stability in the region. See our scheduled group tours below. Our 3 day / 2 night tour of the Somalian capital Mogadishu, takes you to the highlights including the fish market, Liido Beach, the lighthouse, market and Peace park. This is a private tour that can be arranged on any dates. See the itinerary here. We take security very seriously so we have limited this tour for up to four travellers only. You will be accompanied by a two vehicle security team. Your local guide and security team will have the last say on changes to the itinerary for security reasons.",
    "startDateVacation": "1/09/2024",
    "endDateVacation": "30/09/2024",
    "vacationPrice": 6243,
    "imageName": "Somalia.jpeg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66cb2e8adccc489d5b45e54a"),
    "vacationDestination": "Finland",
    "vacationDescription": "Finland, officially the Republic of Finland, is a Nordic country in Northern Europe. It borders Sweden to the northwest, Norway to the north, and Russia to the east, with the Gulf of Bothnia to the west and the Gulf of Finland to the south, opposite Estonia. Finland covers a total area of 338,145 square kilometres (130,559 sq mi), including land area of 303,815 square kilometres (117,304 sq mi), and has a population of 5.6 million. Helsinki is the capital and largest city. The vast majority of the population are ethnic Finns. The official languages are Finnish and Swedish; 84.9 percent of the population speak the first as their mother tongue and 5.1 percent the latter. Finland's climate varies from humid continental in the south to boreal in the north. The land cover is predominantly boreal forest biome, with more than 180,000 recorded lakes.",
    "startDateVacation": "25/11/2024",
    "endDateVacation": "07/01/2025",
    "vacationPrice": 3333,
    "imageName": "Finland.jpg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66cb2fe4dccc489d5b45e54b"),
    "vacationDestination": "Hungary",
    "vacationDescription": "Hungary is a landlocked country in Central Europe. Spanning 93,030 square kilometres (35,920 sq mi) of the Carpathian Basin, it is bordered by Slovakia to the north, Ukraine to the northeast, Romania to the east and southeast, Serbia to the south, Croatia and Slovenia to the southwest, and Austria to the west. Hungary has a population of 9.5 million, mostly ethnic Hungarians and a significant Romani minority. Hungarian, a language belonging to the Ugric branch of the Uralic language family, is the official language, and Budapest is the country's capital and largest city.",
    "startDateVacation": "01/06/2024",
    "endDateVacation": "09/06/2024",
    "vacationPrice": 1108,
    "imageName": "Hungary.jpg"
  },
  {
    "_id": new mongoose.Types.ObjectId("66cb30d2dccc489d5b45e54c"),
    "vacationDestination": "Thailand",
    "vacationDescription": "Thailand, officially the Kingdom of Thailand and historically known as Siam (the official name until 1939), is a country in Southeast Asia on the Indochinese Peninsula. With a population of almost 66 million, it spans 513,115 square kilometres (198,115 sq mi). Thailand is bordered to the northwest by Myanmar, to the northeast and east by Laos, to the southeast by Cambodia, to the south by the Gulf of Thailand and Malaysia, and to the southwest by the Andaman Sea; it also shares maritime borders with Vietnam to the southeast and Indonesia and India to the southwest. Bangkok is the state capital and largest city.",
    "startDateVacation": "01/01/2025",
    "endDateVacation": "1/03/2025",
    "vacationPrice": 4375,
    "imageName": "Thailand.jpeg"
  }
],
    state: 'idle'
};

const vacationsSlice = createSlice({
    name: "Vacation",
    initialState,
    reducers: {
        setVacations: (state, action)=>{
            const {vacations} = action.payload;
            state.value = vacations;
        },
        addVacation: (state, action)=>{
            state.value?.push(action.payload);
        },
        editVacation: (state, action)=>{

        }
    }
    // extraReducers: builder=>{
    //     builder.addCase
    // }
})
export const {setVacations, addVacation, editVacation} = vacationsSlice.actions;
export const currentVacations = vacationsSlice.getInitialState().value;
export const currentVacationState = vacationsSlice.getInitialState().state;
export default vacationsSlice.reducer;