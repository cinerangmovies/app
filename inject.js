{
  "scripts": [
    {
      "page": "techovra.com",
      "html": "<div id='test-banner-1' style='background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; border-radius: 12px; margin: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.3);'><h2 style='color: white; margin: 0; font-family: Arial, sans-serif;'>🎬 TEST INJECTION 1</h2><p style='color: #e0e0e0; margin: 8px 0 0 0;'>This is a test banner - Techovra</p></div>",
      "css": "#test-banner-1 { animation: slideDown 0.6s ease-out; } @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } } #test-banner-1:hover { transform: scale(1.02); transition: transform 0.3s; }",
      "insert": {
        "mode": "before",
        "selector": "body"
      }
    },
    {
      "page": "sflix.film",
      "html": "<div id='test-banner-2' style='background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; text-align: center; border-radius: 8px; margin: 10px; box-shadow: 0 4px 15px rgba(245,87,108,0.4);'><h3 style='color: white; margin: 0;'>🔥 TEST INJECTION 2</h3><p style='color: #ffe0e0; margin: 5px 0 0 0;'>Sflix Test Banner</p></div>",
      "css": "#test-banner-2 { animation: pulse 2s infinite; } @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.02); } 100% { transform: scale(1); } }",
      "insert": {
        "mode": "before",
        "selector": "header"
      }
    },
    {
      "page": "*",
      "html": "<div id='test-banner-global' style='background: #2d3436; color: #dfe6e9; padding: 10px; text-align: center; font-size: 14px; border-bottom: 3px solid #00b894; position: sticky; top: 0; z-index: 9999;'><span style='font-weight: bold;'>🌐 GLOBAL TEST</span> - This appears on all pages</div>",
      "css": "#test-banner-global { font-family: 'Segoe UI', Arial, sans-serif; } #test-banner-global span { color: #00b894; }",
      "insert": {
        "mode": "before",
        "selector": "body"
      }
    },
    {
      "page": "techovra.com",
      "html": "<div id='test-banner-3' style='background: #00b894; padding: 10px; text-align: center; border-radius: 0 0 20px 20px; color: white;'><strong>📺 TEST BANNER 3</strong> - Second injection for Techovra</div>",
      "css": "#test-banner-3 { animation: fadeIn 1s; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }",
      "insert": {
        "mode": "after",
        "selector": ".main-content"
      }
    },
    {
      "page": "sflix.film",
      "html": "<div id='test-banner-4' style='background: #6c5ce7; padding: 12px; text-align: center; border-radius: 10px; margin: 10px; color: white;'><span style='font-size: 20px;'>🎯 TEST BANNER 4</span><br><small>Second injection for Sflix</small></div>",
      "css": "#test-banner-4 { box-shadow: 0 4px 20px rgba(108,92,231,0.4); }",
      "insert": {
        "mode": "after",
        "selector": ".container"
      }
    }
  ]
}
