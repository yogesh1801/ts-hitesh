// Can be used to restrict user choices

enum seatChoice {
    AISLE = 10, // we can assign number also and string to all of them
    MIDDLE = "middle",
    WINDOW = "window "
}

const hcSeat = seatChoice.AISLE
// but the above thing generates a lot of code

// in order to escape we simply put const

const enum seatChoice2 {
    AISLE = 10, // we can assign number also and string to all of them
    MIDDLE = "middle",
    WINDOW = "window "
}

const hcSeat2 = seatChoice2.AISLE
export {}