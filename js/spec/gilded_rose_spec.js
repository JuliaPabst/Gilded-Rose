/* 
#TODO 
1. Add test case for '+5 Dexterity Vest'
2. Add test case for 'Aged Brie' 
3. Add test case for 'Elixir of the Mongoose' 
4. Add test case for 'Sulfuras, Hand of Ragnaros' 
5. Add test case for 'Backstage passes to a TAFKAL80ETC concert' 
6. Add test case for 'Conjured Mana Cake'  
7. Add test case for 'Aged Brie' when quality is 50
8. Add test case for 'Backstage passes to a TAFKAL80ETC concert' when quality is 50
9. Add test case for 'Conjured Mana Cake' when quality is 0
10. Add test case for 'Sulfuras, Hand of Ragnaros' when quality is 80

*/

describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

});
