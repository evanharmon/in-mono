// &'static is a "lifetime specifier", something you'll learn more about later
// pub fn hello() -> &'static str {
//     "Goodbye, Mars!"
// }

// &'static is a 'lifetime specifier'
pub fn hello() -> &'static str {
    "Hello, World!"
}
