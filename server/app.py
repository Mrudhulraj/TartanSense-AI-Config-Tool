from flask import jsonify, Flask, render_template, url_for, request, redirect
import os
import json
app = Flask(__name__)


@app.route('/config', methods=['POST', 'GET'])
def handle():
    if(request.method == 'GET'):
        f = open('sample.json')
        data = json.load(f)
        l = []
        for i in data.keys():
            temp = {"header": i, "body": [j for j in data[i].values()]}
            l.append(temp)
        return jsonify({"data": l})
    else:
        api_data = request.json
        c = 0
        f = open('sample.json')
        data = json.load(f)
        for i in data:
            t1 = data[i]  # dictionary
            for j in t1:
                if(',' in api_data[c]['value']):
                    t1[j]['value'] = (api_data[c]['value'].split(','))
                else:
                    t1[j]['value'] = float(api_data[c]['value'])
                c += 1
        json_object = json.dumps(data)
        with open("sample2.json", "w") as outfile:
            outfile.write(json_object)
        return data


if(__name__ == "__main__"):
    app.run(debug=True)
