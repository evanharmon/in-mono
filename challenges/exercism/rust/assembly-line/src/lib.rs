// This stub file contains items that aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

const CARS_PER_HOUR: u8 = 221; // 0 - 255

pub fn get_success_rate(speed: u8) -> f64 {
    match speed {
        0 => 1.0, // to be exhaustive
        1 | 2 | 3 | 4 => 1.0,
        5 | 6 | 7 | 8 => 0.9,
        9 | 10.. => 0.77,
    }
}

pub fn production_rate_per_hour(speed: u8) -> f64 {
    // unimplemented!("calculate hourly production rate at speed: {}", speed)
    let total_cars: u32 = speed as u32 * CARS_PER_HOUR as u32;
    let total_cars_float = total_cars as f64;
    let success_rate = get_success_rate(speed);
    let total_rate = total_cars_float * success_rate;
    return total_rate;
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    // unimplemented!("calculate the amount of working items at speed: {}", speed)
    let rate_per_hour = production_rate_per_hour(speed);
    let rate_per_minute = rate_per_hour as f64 / 60.0;
    return rate_per_minute.abs() as u32;
}
