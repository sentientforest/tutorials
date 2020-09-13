actor Calc {
    flexible var cell : Int = 0;

    public func add(n:Int) : async Int { cell += n; cell };
    public func sub(n:Int) : async Int { cell -= n; cell };
    public func mul(n:Int) : async Int { cell *= n; cell };
    public func div(n:Int) : async ?Int {
        if ( n == 0) {
            return null 
        } else {
            cell /= n; ?cell
        }
    };

    public func clearall() : async Int {
        if (cell: Int != 0) { 
          cell -= cell; cell 
        } else {
          cell
        }
    };
}