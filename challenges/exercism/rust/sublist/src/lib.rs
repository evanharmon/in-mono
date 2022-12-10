#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq>(_first_list: &[T], _second_list: &[T]) -> Comparison {
    // had to lookup a solution
    // https://exercism.org/tracks/rust/exercises/sublist/solutions/rsalmei
    let superlist = _second_list.is_empty()
        || _first_list
            .windows(_second_list.len())
            .any(|x| x == _second_list);
    let sublist = _first_list.is_empty()
        || _second_list
            .windows(_first_list.len())
            .any(|x| x == _first_list);
    match (superlist, sublist) {
        (true, true) => Comparison::Equal,
        (true, false) => Comparison::Superlist,
        (false, true) => Comparison::Sublist,
        (false, false) => Comparison::Unequal,
    }
}
