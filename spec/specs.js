describe('getRomanDigit',function() {
  it("returns the roman numeral of the value 1",function() {
    expect(getRomanDigit(1)).to.equals("I")
  });

  it("returns the roman numeral of the value 6",function() {
    expect(getRomanDigit(6)).to.equals("VI")
  });

  it("returns the roman numeral of the value 8",function() {
    expect(getRomanDigit(8)).to.equals("VIII")
  });
});
