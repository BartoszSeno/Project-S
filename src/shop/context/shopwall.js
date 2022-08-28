import "./templates/shopwall.css";

const ShopWall = () => {
  return (
    <div className="shop_box">
      <div className="shop_limited_move">
        <div className="Limited_edition">
          <div className="Limited_text">Premium Edition</div>
        </div>
      </div>
      <div className="shop_four_box">
        <div className="shop_moved">
          <div className="shop_bronze">
            <div className="bronze_img"></div>
            <div className="shop_pice">
              <div className="shop_title">Bronze Edition</div>
              <div className="shop_cost"> 10$</div>
              <div className="shop_total_value"></div>
            </div>
            <div className="shop_buton_buy">
              <button className="b bronze">Purchase</button>
            </div>
            <div className="shop_text">
              <ul>
                <li>Game Pas</li>
              </ul>
            </div>
          </div>
          <div className="shop_silver">
            <div className="silver_img"></div>
            <div className="shop_pice">
              <div className="shop_title">Silver Edition</div>
              <div className="shop_cost">40$</div>
              <div className="shop_total_value">Total Value of 70$</div>
            </div>
            <div className="shop_buton_buy">
              <button className="b silver">Purchase</button>
            </div>
            <div className="shop_text">
              <ul>
                <li>Game Pas</li>
                <li>Value Pack (15 Days)</li>
                <li>Mount: tier 5(Mele)</li>
                <li>Outfit Box</li>
                <li>Pet Box (Tier 2)</li>
                <li>Inventory Expansion +8</li>
                <li>1,000G In Game Coin Value</li>
              </ul>
            </div>
          </div>
          <div className="shop_gold">
            <div className="gold_img"></div>
            <div className="shop_pice">
              <div className="shop_title">Gold Edition</div>
              <div className="shop_cost">90$</div>
              <div className="shop_total_value">Total Value of 220$</div>
            </div>
            <div className="shop_buton_buy">
              <button className="b gold">Purchase</button>
            </div>
            <div className="shop_text">
              <ul>
                <li>Game Pas</li>
                <li>Value Pack (30 Days)</li>
                <li>Mount: tier 7(Mele)</li>
                <li>Outfit Box</li>
                <li>Pet Box (Tier 4)</li>
                <li>Inventory Expansion +16</li>
                <li>4,000G In Game Coin Value</li>
                <li>[Title] Fundator</li>
                <li>Horse Gear Set Box</li>
                <li>Maid Box x2</li>
                <li>Mountain Scroll Box x10</li>
                <li>30% Discount Cuppon x2</li>
              </ul>
            </div>
          </div>
          <div className="shop_premium">
            <div className="premium_img"></div>
            <div className="shop_pice">
              <div className="shop_title">Premium Edition</div>
              <div className="shop_cost">150$</div>
              <div className="shop_total_value">Total Value of 580$</div>
            </div>
            <div className="shop_buton_buy">
              <button className="b premium">Purchase</button>
            </div>
            <div className="shop_text">
              <ul>
                <li>Game Pas</li>
                <li>Value Pack (90 Days)</li>
                <li>Mount: tier 10(Famele & Mele)</li>
                <li>Premium Outfit Box</li>
                <li>Pet Box (Tier 6) x2</li>
                <li>Inventory Expansion +48</li>
                <li>12,000G In Game Coin Value</li>
                <li>[Title] Master</li>
                <li>Premium Horse Gear Set Box</li>
                <li>Maid Box x5</li>
                <li>Mountain Scroll Box x20</li>
                <li>60% Discount Cuppon x3</li>
                <li>Dragon's Blessing</li>
                <li>Blessing Mountain(30 Days)</li>
                <li>Book of Darknes(30 Days)</li>
                <li>Unique Outfit Box</li>
                <li>Unique Pet (Tier 6)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopWall;
