import React from 'react';
import {BackTooth, FrontTooth} from "../Components.jsx";

const DentalChartTeeth = ({handleToothUpdate}) => {
    return (
        <>
            {/* Upper Row */}
            <div className="dental-chart">
                <div>
                    <p>18</p>
                    <BackTooth toothId="Tooth18" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>17</p>
                    <BackTooth toothId="Tooth17" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>16</p>
                    <BackTooth toothId="Tooth16" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>15</p>
                    <BackTooth toothId="Tooth15" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>14</p>
                    <BackTooth toothId="Tooth14" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>13</p>
                    <FrontTooth toothId="Tooth13" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>12</p>
                    <FrontTooth toothId="Tooth12" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>11</p>
                    <FrontTooth toothId="Tooth11" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>21</p>
                    <FrontTooth toothId="Tooth21" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>22</p>
                    <FrontTooth toothId="Tooth22" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>23</p>
                    <FrontTooth toothId="Tooth23" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>24</p>
                    <BackTooth toothId="Tooth24" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>25</p>
                    <BackTooth toothId="Tooth25" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>26</p>
                    <BackTooth toothId="Tooth26" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>27</p>
                    <BackTooth toothId="Tooth27" onUpdate={handleToothUpdate} />
                </div>
                <div>
                    <p>28</p>
                    <BackTooth toothId="Tooth28" onUpdate={handleToothUpdate} />
                </div>
            </div>
            {/* Lower Row */}
            <div className="dental-chart">
                <div>
                    <BackTooth toothId="Tooth48" onUpdate={handleToothUpdate} />
                    <p>48</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth47" onUpdate={handleToothUpdate} />
                    <p>47</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth46" onUpdate={handleToothUpdate} />
                    <p>46</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth45" onUpdate={handleToothUpdate} />
                    <p>45</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth44" onUpdate={handleToothUpdate} />
                    <p>44</p>
                </div>
                <div>
                    <FrontTooth toothId="Tooth43" onUpdate={handleToothUpdate} />
                    <p>43</p>
                </div>
                <div>
                    <FrontTooth toothId="Tooth42" onUpdate={handleToothUpdate} />
                    <p>42</p>
                </div>
                <div>
                    <FrontTooth toothId="Tooth41" onUpdate={handleToothUpdate} />
                    <p>41</p>
                </div>
                <div>
                    <FrontTooth toothId="Tooth31" onUpdate={handleToothUpdate} />
                    <p>31</p>
                </div>
                <div>
                    <FrontTooth toothId="Tooth32" onUpdate={handleToothUpdate} />
                    <p>32</p>
                </div>
                <div>
                    <FrontTooth toothId="Tooth33" onUpdate={handleToothUpdate} />
                    <p>33</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth34" onUpdate={handleToothUpdate} />
                    <p>34</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth35" onUpdate={handleToothUpdate} />
                    <p>35</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth36" onUpdate={handleToothUpdate} />
                    <p>36</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth37" onUpdate={handleToothUpdate} />
                    <p>37</p>
                </div>
                <div>
                    <BackTooth toothId="Tooth38" onUpdate={handleToothUpdate} />
                    <p>38</p>
                </div>
            </div>
        </>
    );
};

export default DentalChartTeeth;