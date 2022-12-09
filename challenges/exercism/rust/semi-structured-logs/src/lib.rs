// This stub file contains items that aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

/// various log levels
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
    Debug,
}
/// primary function for emitting logs
pub fn log(level: LogLevel, message: &str) -> String {
    // unimplemented!("return a message for the given log level")
    let upper_level_str = format!("{:?}", level).to_uppercase();
    return format!("[{}]: {}", upper_level_str, message);
}
pub fn info(message: &str) -> String {
    // unimplemented!("return a message for info log level")
    return format!("[INFO]: {}", message);
}
pub fn warn(message: &str) -> String {
    // unimplemented!("return a message for warn log level")
    return format!("[WARNING]: {}", message);
}
pub fn error(message: &str) -> String {
    // unimplemented!("return a message for error log level")
    return format!("[ERROR]: {}", message);
}
