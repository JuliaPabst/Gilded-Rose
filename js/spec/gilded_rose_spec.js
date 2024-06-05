/* 
#TODO 
1. Add test case for '+5 Dexterity Vest' normal
2. Add test case for 'Aged Brie' normal
3. Add test case for 'Elixir of the Mongoose' nomral
4. Add test case for 'Sulfuras, Hand of Ragnaros' normal
5. Add test case for 'Backstage passes to a TAFKAL80ETC concert' normal
6. Add test case for 'Conjured Mana Cake'  normal 
7. Add test case for 'Aged Brie' when quality is 50
8. Add test case for 'Backstage passes to a TAFKAL80ETC concert' when quality is 50
9. Add test case for 'Conjured Mana Cake' when quality is 0
10. Add test case for 'Sulfuras, Hand of Ragnaros' when quality is 80
11. Add test case for '+5 Dexterity Vest' when sell_in is -1
11. Add test case for '+5 Dexterity Vest' when quality is 0

*/

describe("Gilded Rose", function() {

  it("+5 Dexterity Vest normal", function() {
    items = [ new Item('+5 Dexterity Vest', 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

});
