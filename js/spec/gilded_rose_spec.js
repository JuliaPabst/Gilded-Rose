/* 
#TODO 
1. Add test case for '+5 Dexterity Vest' normal
2. Add test case for 'Aged Brie' normal
3. Add test case for 'Elixir of the Mongoose' normal
4. Add test case for 'Sulfuras, Hand of Ragnaros' normal
5. Add test case for 'Backstage passes to a TAFKAL80ETC concert' normal
6. Add test case for 'Conjured Mana Cake'  normal 
7. Add test case for 'Aged Brie' when quality is 50
8. Add test case for 'Backstage passes to a TAFKAL80ETC concert' when quality is 50
9. Add test case for 'Conjured Mana Cake' when quality is 0
10. Add test case for 'Sulfuras, Hand of Ragnaros' when quality is 80
11. Add test case for '+5 Dexterity Vest' when sell_in is -1
11. Add test case for '+5 Dexterity Vest' when quality is 0
13. Add test case for 'Backstage passes to a TAFKAL80ETC concert' when sell_in is 10 days 
14. Add test case for 'Backstage passes to a TAFKAL80ETC concert' when there are 5 days 

*/

describe("Gilded Rose", function() {

  it("+5 Dexterity Vest normal", function() {
    items = [ new Item('+5 Dexterity Vest', 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("Aged Brie normal", function() {
    items = [ new Item('Aged Brie', 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("Elixir of the Mongoose normal", function() {
    items = [ new Item('Elixir of the Mongoose', 5, 7) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(6);
  });

  it("Sulfuras, Hand of Ragnaros normal", function() {
    items = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);

  });

  it("Backstage passes to a TAFKAL80ETC concert normal", function() {
    items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });

  it("Conjured Mana Cake normal", function() {
    items = [ new Item('Conjured Mana Cake', 3, 6) ];
    update_quality();
    expect(items[0].sell_in).toEqual(2);
    expect(items[0].quality).toEqual(5);
  });

  it("Aged Brie when quality is 50", function() {
    items = [ new Item('Aged Brie', 2, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert when quality is 50", function() {
    items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(50);
  });

  it("Conjured Mana Cake when quality is 0", function() {
    items = [ new Item('Conjured Mana Cake', 3, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(2);
    expect(items[0].quality).toEqual(0);
  });


});
