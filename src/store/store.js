import { create } from "zustand";
import FishTexture from '../assets/fish1.png'
import FishTexture2 from '../assets/Fish2.png'
import FishTexture3 from '../assets/Fish3.png'
import FishTexture4 from '../assets/Fish4.png'
import FishTexture5 from '../assets/Fish5.png'
import FishTexture6 from '../assets/Fish6.png'

const randomNumberInRange =(min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const initialState =   `{
    initGame: 'initial',
    // updateGameState: (updateGame) => set((state) => ({ ...state, updateGameState: updateGame})),
    numFishes: 6,
    user: '',
    userScore: 0,
    numAmno: 18,
    decNumAmno: () => set((state) => ({ numAmno: state.numAmno - 1})),
    incUserScore: () => set((state) => ({ userScore: state.userScore + 10})),
    decUserScore: () => set((state) => ({ userScore: state.userScore - 1})),
    gameLevel: 1,
    fishData: [
        {
            fishIdx: 0,
            isFishDestroyed: false,
            fishHitPts: 3,
            fTexture : FishTexture,
            fSize: [2,1],
            fPos: [randomNumberInRange(-2,2), randomNumberInRange(-1,3) ,0],
            // fAnim
        },
        {
            fishIdx: 1,
            isFishDestroyed: false,
            fishHitPts: 5,
            fTexture : FishTexture2,
            fSize: [1.5,1.5],
            fPos: [randomNumberInRange(-1,1), randomNumberInRange(-2,3) ,0],
            // fAnim
        },
        {
            fishIdx: 2,
            isFishDestroyed: false,
            fishHitPts: 7,
            fTexture : FishTexture3,
            fSize: [1.5,1.5],
            fPos: [randomNumberInRange(-5,0), randomNumberInRange(-2,3) ,0],
            // fAnim
        },
        {
            fishIdx: 3,
            isFishDestroyed: false,
            fishHitPts: 6,
            fTexture : FishTexture4,
            fSize: [1.5,1.5],
            fPos: [randomNumberInRange(-3,1), randomNumberInRange(-1,3),0],
            // fAnim
        },
        {
            fishIdx: 4,
            isFishDestroyed: false,
            fishHitPts: 10,
            fTexture : FishTexture5,
            fSize: [2,1.5],
            fPos: [randomNumberInRange(-3,3), randomNumberInRange(0,3.5),0],
            // fAnim
        },
        {
            fishIdx: 5,
            isFishDestroyed: false,
            fishHitPts: 3,
            fTexture : FishTexture6,
            fSize: [2,2],
            fPos: [randomNumberInRange(-4,4), randomNumberInRange(-2,2),0],
            // fAnim
        }
    ],
    // updateFishData: (fishData) => set((state) => ({ ...state, updateGameState: updateGame})),

}
`
// const randomNumberInRange =(min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

const gameStore = create((set) => (
    {
        initGame: 'initial',
        // updateGameState: (updateGame) => set((state) => ({ ...state, updateGameState: updateGame})),
        numFishes: 6,
        user: '',
        userScore: 0,
        numAmno: 18,
        decNumAmno: () => set((state) => ({ numAmno: state.numAmno - 1})),
        incUserScore: () => set((state) => ({ userScore: state.userScore + 10})),
        decUserScore: () => set((state) => ({ userScore: state.userScore - 1})),
        gameLevel: 1,
        // reset: () => { set(`${initialState}`)},        
        fishData: [
            {
                fishIdx: 0,
                isFishDestroyed: false,
                fishHitPts: 3,
                fTexture : FishTexture,
                fSize: [2,1],
                fPos: [randomNumberInRange(-2,2), randomNumberInRange(-1,3) ,0],
                // fAnim
            },
            {
                fishIdx: 1,
                isFishDestroyed: false,
                fishHitPts: 5,
                fTexture : FishTexture2,
                fSize: [1.5,1.5],
                fPos: [randomNumberInRange(-1,1), randomNumberInRange(-2,3) ,0],
                // fAnim
            },
            {
                fishIdx: 2,
                isFishDestroyed: false,
                fishHitPts: 7,
                fTexture : FishTexture3,
                fSize: [1.5,1.5],
                fPos: [randomNumberInRange(-5,0), randomNumberInRange(-2,3) ,0],
                // fAnim
            },
            {
                fishIdx: 3,
                isFishDestroyed: false,
                fishHitPts: 6,
                fTexture : FishTexture4,
                fSize: [1.5,1.5],
                fPos: [randomNumberInRange(-3,1), randomNumberInRange(-1,3),0],
                // fAnim
            },
            {
                fishIdx: 4,
                isFishDestroyed: false,
                fishHitPts: 10,
                fTexture : FishTexture5,
                fSize: [2,1.5],
                fPos: [randomNumberInRange(-3,3), randomNumberInRange(0,3.5),0],
                // fAnim
            },
            {
                fishIdx: 5,
                isFishDestroyed: false,
                fishHitPts: 3,
                fTexture : FishTexture6,
                fSize: [2,2],
                fPos: [randomNumberInRange(-4,4), randomNumberInRange(-2,2),0],
                // fAnim
            }
        ],
        // updateFishData: (fishData) => set((state) => ({ ...state, updateGameState: updateGame})),

    }
))

export const useGameStore = gameStore;

