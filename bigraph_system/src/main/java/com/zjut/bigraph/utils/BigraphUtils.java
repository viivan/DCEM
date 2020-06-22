package com.zjut.bigraph.utils;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BigraphUtils {

    public static boolean isMatch(String a, String b) {
        JSONObject jsonObject = XML.toJSONObject(a);
        JSONArray jsonObjectA = jsonObject.getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        JSONArray jsonObjectB = XML.toJSONObject(b).getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        if (jsonObjectA.length() != jsonObjectB.length()) {
            return false;
        }
        Map<String, JSONObject> jsonObjectAMap = new HashMap<>();
        Map<String, JSONObject> jsonObjectBMap = new HashMap<>();
        for (int i = 0; i < jsonObjectA.length(); i++) {
            jsonObjectAMap.put(jsonObjectA.getJSONObject(i).getString("flag"), jsonObjectA.getJSONObject(i));
        }
        for (int i = 0; i < jsonObjectB.length(); i++) {
            jsonObjectBMap.put(jsonObjectB.getJSONObject(i).getString("flag"), jsonObjectB.getJSONObject(i));
        }

        for (Map.Entry<String, JSONObject> entry : jsonObjectBMap.entrySet()) {
            if (jsonObjectAMap.containsKey(entry.getKey())) {
                JSONObject sJsonObjectA = jsonObjectAMap.get(entry.getKey()).getJSONObject("C");
                JSONObject sJsonObjectB = entry.getValue().getJSONObject("C");

                // 比较CN
                if (!sJsonObjectA.getJSONObject("CN").has("content")
                        || !sJsonObjectB.getJSONObject("CN").has("content")
                        || !sJsonObjectA.getJSONObject("CN").getString("content").equals(sJsonObjectB.getJSONObject("CN").getString("content"))) {
                    return false;
                }
                // 比较CT
                if (!sJsonObjectA.getJSONObject("CT").has("content")
                        || !sJsonObjectB.getJSONObject("CT").has("content")
                        || !sJsonObjectA.getJSONObject("CT").getString("content").equals(sJsonObjectB.getJSONObject("CT").getString("content"))) {
                    return false;
                }
                // 遍历p
                JSONArray pJsonArrayA = sJsonObjectA.getJSONObject("P").getJSONArray("p");
                JSONArray pJsonArrayB = sJsonObjectB.getJSONObject("P").getJSONArray("p");
                for (int j = 0; j < jsonObjectA.length(); j++) {
                    JSONObject pJsonObjectA = pJsonArrayA.getJSONObject(j);
                    JSONObject pJsonObjectB = pJsonArrayB.getJSONObject(j);
                    if (!pJsonObjectA.getJSONObject("pC").has("content")
                            || !pJsonObjectB.getJSONObject("pC").has("content")
                            || !pJsonObjectA.getJSONObject("pC").getString("content").equals(pJsonObjectB.getJSONObject("pC").getString("content"))) {
                        return false;
                    }
                    if (!pJsonObjectA.getJSONObject("pT").has("content")
                            || !pJsonObjectB.getJSONObject("pT").has("content")
                            || !pJsonObjectA.getJSONObject("pT").getString("content").equals(pJsonObjectB.getJSONObject("pT").getString("content"))) {
                        return false;
                    }
                    if (!pJsonObjectA.getJSONObject("pI").has("content")
                            || !pJsonObjectB.getJSONObject("pI").has("content")
                            || !pJsonObjectA.getJSONObject("pI").getString("content").equals(pJsonObjectB.getJSONObject("pI").getString("content"))) {
                        return false;
                    }
                    if (!pJsonObjectA.getJSONObject("pN").has("content")
                            || !pJsonObjectB.getJSONObject("pN").has("content")
                            || !pJsonObjectA.getJSONObject("pN").getString("content").equals(pJsonObjectB.getJSONObject("pN").getString("content"))) {
                        return false;
                    }
                }
            } else {
                return false;
            }

        }
        return true;
    }

    public static List<String> getFailedService(String a, String b) {
        List<String> stringList = new ArrayList<>();

        JSONObject jsonObject = XML.toJSONObject(a);
//        JSONArray jsonObjectA = jsonObject.getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
//        JSONArray jsonObjectB = XML.toJSONObject(b).getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");

        JSONArray jsonObjectA = new JSONArray();
        if (jsonObject.getJSONObject("DC").getJSONObject("Ctrl").get("s") instanceof JSONObject) {
            jsonObjectA.put(jsonObject.getJSONObject("DC").getJSONObject("Ctrl").getJSONObject("s"));
        } else {
            jsonObjectA = jsonObject.getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        }
        JSONArray jsonObjectB = new JSONArray();
        if (XML.toJSONObject(b).getJSONObject("DC").getJSONObject("Ctrl").get("s") instanceof JSONObject) {
            jsonObjectB.put(XML.toJSONObject(b).getJSONObject("DC").getJSONObject("Ctrl").getJSONObject("s"));
        } else {
            jsonObjectB = XML.toJSONObject(b).getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        }

        for (int i = 0; i < jsonObjectA.length(); i++) {
            JSONObject sJsonObjectA = jsonObjectA.getJSONObject(i).getJSONObject("C");
            JSONObject sJsonObjectB = jsonObjectB.getJSONObject(i).getJSONObject("C");

            // 比较CN
            if (!sJsonObjectA.getJSONObject("CN").has("content")
                    || !sJsonObjectB.getJSONObject("CN").has("content")
                    || !sJsonObjectA.getJSONObject("CN").getString("content").equals(sJsonObjectB.getJSONObject("CN").getString("content"))) {
                stringList.add(XML.toString(jsonObjectB.getJSONObject(i)));
                continue;
            }
            // 比较CT
            if (!sJsonObjectA.getJSONObject("CT").has("content")
                    || !sJsonObjectB.getJSONObject("CT").has("content")
                    || !sJsonObjectA.getJSONObject("CT").getString("content").equals(sJsonObjectB.getJSONObject("CT").getString("content"))) {
                stringList.add(XML.toString(jsonObjectB.getJSONObject(i)));
                continue;
            }
            // 遍历p
            JSONArray pJsonArrayA = sJsonObjectA.getJSONObject("P").getJSONArray("p");
            JSONArray pJsonArrayB = sJsonObjectB.getJSONObject("P").getJSONArray("p");
            for (int j = 0; j < jsonObjectA.length(); j++) {
                JSONObject pJsonObjectA = pJsonArrayA.getJSONObject(i);
                JSONObject pJsonObjectB = pJsonArrayB.getJSONObject(i);
                if (!pJsonObjectA.getJSONObject("pC").has("content")
                        || !pJsonObjectB.getJSONObject("pC").has("content")
                        || !pJsonObjectA.getJSONObject("pC").getString("content").equals(pJsonObjectB.getJSONObject("pC").getString("content"))) {
                    stringList.add(XML.toString(jsonObjectB.getJSONObject(i)));
                    break;
                }
                if (!pJsonObjectA.getJSONObject("pT").has("content")
                        || !pJsonObjectB.getJSONObject("pT").has("content")
                        || !pJsonObjectA.getJSONObject("pT").getString("content").equals(pJsonObjectB.getJSONObject("pT").getString("content"))) {
                    stringList.add(XML.toString(jsonObjectB.getJSONObject(i)));
                    break;
                }
                if (!pJsonObjectA.getJSONObject("pI").has("content")
                        || !pJsonObjectB.getJSONObject("pI").has("content")
                        || !pJsonObjectA.getJSONObject("pI").getString("content").equals(pJsonObjectB.getJSONObject("pI").getString("content"))) {
                    stringList.add(XML.toString(jsonObjectB.getJSONObject(i)));
                    break;
                }
                if (!pJsonObjectA.getJSONObject("pN").has("content")
                        || !pJsonObjectB.getJSONObject("pN").has("content")
                        || !pJsonObjectA.getJSONObject("pN").getString("content").equals(pJsonObjectB.getJSONObject("pN").getString("content"))) {
                    stringList.add(XML.toString(jsonObjectB.getJSONObject(i)));
                    break;
                }
            }
        }
        return stringList;
    }

    public static String deleteBigraph(String aBigraph, String failedService) {
        JSONObject bigraph = XML.toJSONObject(aBigraph);
        JSONArray jsonObjectA = bigraph.getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        JSONObject jsonObjectFailService = XML.toJSONObject(failedService);
        for (int i = 0; i < jsonObjectA.length(); i++) {
            if (jsonObjectA.getJSONObject(i).getString("flag").equals(jsonObjectFailService.getString("flag"))) {
                jsonObjectA.remove(i);
                break;
            }
        }

        if (!"null".equals(jsonObjectFailService.getJSONObject("C").getJSONObject("CL").getJSONObject("CN").getString("description"))) {
            for (int i = 0; i < jsonObjectA.length(); i++) {
                if (jsonObjectA.getJSONObject(i).getString("flag").equals(jsonObjectFailService.getJSONObject("C").getJSONObject("CL").getJSONObject("CN").getString("description"))) {
                    jsonObjectA.remove(i);
                    break;
                }
            }
        }
        return XML.toString(bigraph);
    }

    // a是破损的偶图
    public static String recover(String aBigraph, String bBigraph) {
        JSONObject jsonObject = XML.toJSONObject(aBigraph);

        JSONArray jsonObjectA = new JSONArray();
        if (jsonObject.getJSONObject("DC").getJSONObject("Ctrl").get("s") instanceof JSONObject) {
            jsonObjectA.put(jsonObject.getJSONObject("DC").getJSONObject("Ctrl").getJSONObject("s"));
        } else {
            jsonObjectA = jsonObject.getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        }
        JSONArray jsonObjectB = new JSONArray();
        if (XML.toJSONObject(bBigraph).getJSONObject("DC").getJSONObject("Ctrl").get("s") instanceof JSONObject) {
            jsonObjectB.put(XML.toJSONObject(bBigraph).getJSONObject("DC").getJSONObject("Ctrl").getJSONObject("s"));
        } else {
            jsonObjectB = XML.toJSONObject(bBigraph).getJSONObject("DC").getJSONObject("Ctrl").getJSONArray("s");
        }

        Map<String, JSONObject> jsonObjectAMap = new HashMap<>();
        Map<String, JSONObject> jsonObjectBMap = new HashMap<>();
        for (int i = 0; i < jsonObjectA.length(); i++) {
            jsonObjectAMap.put(jsonObjectA.getJSONObject(i).getString("flag"), jsonObjectA.getJSONObject(i));
        }
        for (int i = 0; i < jsonObjectB.length(); i++) {
            jsonObjectBMap.put(jsonObjectB.getJSONObject(i).getString("flag"), jsonObjectB.getJSONObject(i));
        }

        for (Map.Entry<String, JSONObject> entry : jsonObjectBMap.entrySet()) {
            if (jsonObjectAMap.containsKey(entry.getKey())) {
                JSONObject sJsonObjectA = jsonObjectAMap.get(entry.getKey()).getJSONObject("C");
                JSONObject sJsonObjectB = entry.getValue().getJSONObject("C");

                // 比较CN
                if (!sJsonObjectA.getJSONObject("CN").getString("content").equals(sJsonObjectB.getJSONObject("CN").getString("content"))) {
                    sJsonObjectA.getJSONObject("CN").put("content", sJsonObjectB.getJSONObject("CN").getString("content"));
                }
                // 比较CT
                if (!sJsonObjectA.getJSONObject("CT").getString("content").equals(sJsonObjectB.getJSONObject("CT").getString("content"))) {
                    sJsonObjectA.getJSONObject("CT").put("content", sJsonObjectB.getJSONObject("CT").getString("content"));
                }
                // 遍历p
                JSONArray pJsonArrayA = sJsonObjectA.getJSONObject("P").getJSONArray("p");
                JSONArray pJsonArrayB = sJsonObjectB.getJSONObject("P").getJSONArray("p");
                sJsonObjectA.put("P", sJsonObjectB.getJSONObject("P"));
            } else {
                jsonObjectA.put(entry.getValue());
            }
        }
        jsonObject.getJSONObject("DC").getJSONObject("Ctrl").put("s", jsonObjectA);
        return XML.toString(jsonObject);
    }



}
