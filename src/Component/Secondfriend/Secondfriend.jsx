import "./Secondfriend.css"
import { MdFavoriteBorder } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
// import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
const Secondfriend=()=>{
    
    const secondposts=[
      {
     id:1,
     name:"Suravi",
     userId:1,
     profilePic:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     desc:"i am suravi ",
     likes:71,
     img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMWFRUXFRYVFxcVFRUVFRYWFRUWFxUVFRUYHSggGBolHRUVITEhJikrLi4vFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADwQAAEDAwIDBgMGBAYDAQAAAAEAAhEDBCESMQVBURMiYXGBkQYyoRRCscHR8AcjUmIVM0Ny4fEXkqIW/8QAGwEAAwEBAQEBAAAAAAAAAAAAAgMEAQAFBgf/xAA0EQACAgEDAgQFAwQCAgMAAAAAAQIRAxIhMQRBBRMiUTJhcZHwgbHBFEKh0SPhFfFSctL/2gAMAwEAAhEDEQA/APkD6yUXTylLauV1E6y7hlGqusux5AplZdZRGYbQEokUR3DWUltDVAqrWyGURWTAmhbWt1PLY8Xqem08FVNmYQtnkyTTGFKigcwLLOwWeYdZ5zQN1ykzuSl5CN33DUWaO0+A7+o1r202Q+C2arJIInUAJxCoj0mRq9imPSzavsO7n+GYbpi9ZJIa4GkdyQDoIf47FP8A6Nf/ACKo+GTkrRR/40cXw27Z2Y+dzmEPaegbME+q7+lV/FsbLwyaa+ZI/AdBrjquXkDo1rT7mfwW+TjXMmUR8Gm+4Pc/w/l80rhopnbtGkvHmBAM7g43WvCr2kKn4VkUtuDlL+HXzB9zn7ummYI6mXb+ARLCu7O/8bOt2K+L/BdeiA5h+0N2PZsdrbvk084wcgoZYWt1uT5ujyY1fJn2tg5EeeCPNJImMKBC0EILQQtMArikhZ1gj6KBmWUOpwltGFZKw1IhK4Isa5YBR5y4440o4hFzQmnFjQtOI1HLjUBudlcMFReiopbbPArmD3LmVEDQ2OWgqg9DZbiyWNrR6NM9HHIaUXo0VRZN65msXXLVPkIOpimgE7pB871EaYytnJMiNl7ggMND8GV7JlVr67KjqjSS3LTTnkdESXBel0bx3v8AEej0OKGWenv+5r+O3lK4g6KVxTAGHMaS09XAw5vnsvQm0+FZ9Fj6DDNacqp/nBLhlajTphlM9jpcXNDKrajMiC3S93dGTgOG66LSVDI9J5ScYq4/NNV+fQrrPqGAHCockFzdFQDlpcT3o6yUEnLtv+5VHy1u1X0dr7dvsgUOc0nU10ncEQD5h2/oEndPcc2pL018i/VTONJA6OMtnwJ2Relqhd5Fuyw0IEbYHMHAEASZWNGa297JCWtMA7j+o/jt4lZbSM9Llu1/g7aubHeLpOYbqBOCBMZbuT6+CZikkt2Jz3LaHBgvjn4eFvprU21tLy4u1zUa3+41eRJnDifPkhywXxI+b63pljezv89zO0C7Tqg6dtUHTI3GrZKSfJA4PkKbWXAUUVqyFmEabZQcgsm6gi0mWU17PEoJRo5MAfThAGmQlca1ZOVwFEZWoYWCompmUd7VdZ1FNaqtCSATXWjNIOxi1sY2XtooHIW5HeyXajtRKmYWMdjyUw6hWWJnp4c4yoV0aZ6EMgQa65sY8gLWqJUmQ58gK4pR4fUSTYdbFJkRsK1IKMIB8EEGDITMbakmg8cnGaaNFd93Zeln24P0Dp52lYLZ3Di8t1GMc9vBSY5ScqLMkvTaHltXe0RMt5tJxPUdCrYtrZkMnbvuGM4g5o+dwHnI9ij1NdxbUXyiitxcH7s+MBn4fogc17BLUuH99yFO61fejwz+IQOXsdt/dv8AodNUDAbq9YH/ACso55IrgaWF45hk0gW+B734QUcaXYVKbl3Hn/6Kk2mRkuOAwiDnrOIT1mikI/pJ5JfIxnxBxyrbUCKLuz7R5Aa1rYEyXECOkD1QyyPTZL4koYMSUUrf4z50aynPnKs4x0rDGhnaMXRFSCQxMoA7pXVZgtv7eFLkjpYxCypTWJhxZWCtCOOK00rLlppEVERtFVeoiQUUCEoxtB9KkkuQhsIaxLsByOFq2zUyl7USYSZGmYXMdDI0w+jVQ2ehj6jYvFZdqGvqSqrVQkOXPZBjljR58229wulVS2hYzsOH164Jo0n1A0wS0SAd4RQwTnvFWHHFKXCB7q3qUnaarHU3dHtLT6TusljlDlUc4OL3NDq7Sk13UfXmvQl64Jn2PQ59WOMga1pO7QO0naHHljYpEcb1Wei8i0tNjpjhPemOcQD6EqlJdyRv2L/s1N4JZWGPu1AWHPQiQfot8tP4WC8rj8UfsU1LJzdx5EEEHyIwluDjyasilwzzKKygHIOtaYRIVJjWlsiAsjfWwcwOG4I9iY/NLki3psrWzPmnxjxIVa2hhllMaQert3n3x6LZvsj5zxLqPNzNLhbGflAeeXUlgEhzYGUUBMwohMFnCFxxVXo6krNG1YyG4K+wUg3QAV7SESZlUBvYjTOTBqoRIYgRz01IYkRJRIJFcLTR1Tao2yRsu0IbMKXIkaistRBEdIW7sI0XD/gy9qN1NpaegqObTcZ6Mdn3hOXTzZRHps0laRT8QcBdatpl1VlQv1hwYHQxzIkajhwM4ONignjUe4fU9LlwKOvuLK9EtMHePzP6JKdk2WGiVfIraFour2JB6xoFxNF8LfEBty4TDXEE+BGJPgqOny+W6ZZ0eaMHpl3N5/i9OszRVDajTycAR6TsvQbUlTPXlgjNboU1LKnSB7KQ2Z0k6tPkTmPNJcFFVHgd0sPK9K4BKdcZ8DB/JJTL5ROVHlc2BwVMuC0zy5jqFkZ6WdOOqNGk4beNeNO48sKrZoj3i9yV1baTI2Ox/IpEo6R6lqR6g3KFAsaUGrRbA+PMe+i+jScGueANRMBo1CXSMzAOAhq3R04zeNqHLM/Z/A9kGxVuKzndWdmxo8g5rj7lPjhh3ZCvDEluz1b4AsyD2d1Va7kagpuZ6hoafqi/p4Phgy8OVbMxfEOH1KFU0qghw5gy1wOzmnm0qWcXB0zysuNwlpkFWFSFkWTS3GLkwWRC44sotkhBl+EZiXqQa63UFno6BbeWaJMVPGJLuhCJMnaoXVGJiZsWA1qSZGQ2Migpgw4uNHVNSMkfJdqQUYUvCNGo01X4Iq6Gvp1qbg6cPD6bhBgEjS7BgwZVPkP3PSj4bllwazhVGna0mtptbIGaha3U53N07+nLHRNeaGONRPe6XwxRSTRdV4q4/JLZ3My4+sCB5e6nl1TltHY9LH0sI7y3/YS8esxVt3tA1PZoqAD5mtDwHO07lukvnyHRdVwZB4zBTwfNNNCPjVoHUm1m5LXFrx1ae80/V3uo8cux8rKbk1JiiztpqBvKdz9PxVGOLk6Rb4d0fndRo7Lv9qB69uWd13zAkH0xPkc+yx7OiDLilheifNsgwbnpH1P/AH7LBajcW/YbcGvAJBcQeUfVU4Jcpns+EZU28c39BoeM6d3AjxTXko9rJjxwjqboGdx2gczB6wfqlucWTw6rG+JbBFvxFrsAg9CFikh2qMt0WOeFjNstsbzs3Ty5o4ZNIGSGr6jB10Q8mm46DB0naYzjlmVspbuuDFVbrcYW90ssVJhjOJCdIOwl3hOw8+f/AGh1C7V0Zrj3xGBsZjYDcn9Eu7Y/J1OPpoXLd+xmR8S143bPWD+qNM8h+KZq4X2InjFd29Qjygfgi1Mnn1uaX932KZc4ySSepJJ+qFu+SKc3J23YbSZKwSyb7gtgclutpnUgwOwmiwizPe8FNnn2RTgjvY4pgEKIviVXVHC2LOktjNcSYmkORbiOpumIUimpTlGhiYDXpJkWNiwfSjGWPaYUjZIy+jQc4hrWlzjsGgknyAXLd0jVFt0h9wb4YrGq11eiRTbLnAludIwC0GdJJE+yoxYZJ3JbI9DpegySmnkjUTZVKwyXHujeeZ6f8Lc2Stj6zBC3fYHbZPuHSCWsGABA8yVJ5byP5FMsqgh1ZfCNMd7XUmI+YH6EKjH0kE7IZdW4u0Krj+Ht7Tc+rZ3Ye98am1WhrjG0PgiRywFQ8LW8GeN5ubHklPVd8/x9jEX1G5ti+jc03MLuTxg/N3mOHddudivPyYnHkim4qLTAbL52j9mJyn45xgtTPQ8P63D0+O58t9vkv+w74hsiG06sSHtALhyc1okH0gj19F5ZxlP0/K/rRB4tlx5s/mY3zV/Wvz/IjrjSA3mTqPhyaPxWLfckfpgo9+X/AB+fMsoXjh5dIH4ooPTKw8HUvFkjN70WXN00jAJJ9E6Uovg93N4th8v07t/m4tNFKPC82z1IOZs6OcLW75Q/F1M8fDDGcYqDBaD4gwt2rktj4g+6L6HGHZJYdI5gyVlq6sJeIRb3Qdb/ABCw7B3/AKla20G+rxvuWV+PP0/y2HzOI9N0DmIl1UexVQuKrmEElrd3FslxnclLUndIRk6jao7fMX3DGR3dTj1MAfqU6OruRNrkGZRTAAhtNcC2E27crBbD2kALgAGvUkoWzUM7QagAillSRscbbGjaMAABSOVlijQZbujklsdE9cuwuRsjOcSpkpqI8iEzrcpqRPRB9NMSOBK1NaGmUdgtD1DKkFJIUaX4YtXNmsRDSHMaZyXSJgchAIJP1VOCEl6vc9rwrBJZPMa2NLVuhSti6Y11I6ktYAe6P9x9wqMk/LxfNn0GKPm5t+y/cE4ax1Uhz8NHyt6fqfFR48bm7kU5ssYLShpR4q6nVqU6bWvFMtDmyQ4FzW7dR3gmybi6QmMYyg5Tfeh5w/4hpuOkksd/S/HsdiihmT2ezF5eka3W4/tr0KhSPPyYWLvjW4HYNe5rXsZUl4cA4FrqdQACcfOaa2T2I5Vj9UlsfE6j2ucXABveAAaIAkkmByGD7rzMvc8Wcm7ZueBua6nodgPAaSORAiZ6mMeY6qVxXLBhKSnaPmfE6Jp1ajHmXNeWk7TGxA5SIMK1LbYN77nuH2dSs8U6TdT3bAfUk8h4o8eOU5aYh4sUsslGKtn0PhX8PKIaPtD3vqcww6GDwGNR88eQXpx6LHFet2e3j8KhGN5Hf7Din8M29BuplqwkZ1OIquHiNRJ9kSjjgvTErxdN00Hsvv8A9hFhTdH8wsPQPl0eukwsjmS5KpTi/wC1irinwpZOOmpQNFzph9F2kHxa3LCPRDLHhm90RS6LDltx2/PYVD4H7PXqe59AgAOYA14mZ1SHAECPOeWynfQx1W5bE2LwyLm1KX09zJ1eHG3rvachri0ziW7sd4S0g+qhzRak4M8vMvKlKEuzGVctcxukb7+EcvwQ4cTt6uwltVaJ2wLcj2P5dE6eFPjkFZK5K7qzY46m908wdvQhZHWtpI60+GCG1jp6EFNW5jK304XMEraYQMEJoukoJM5IL+yBKchmkPsLUgpbY7HAdspYSmytRJtohdqCUSq4pLYsySF1W0nkmqQiULAbqyToTJ8mMT3VCE8nqgJ7FxpHsVxpGm5TNGG04S86KbWGQWtjzIl0+RLvZX4+EkfWdLpj08Wn2K7ip21ec6GwGDwjB8+fqfFTT/5cl9ux6eOXlYq7739/xfoaWwYI07AgjG4kbjxVMFRBklq5MlaXtRt7Vc4aX9pBHKWkAEDmJa0jwKW0nqZ2DJr6eerbf7fP+TfstKV20vwDgCDtgGZ57/RBBrLG3yB03VyatdthXVq3FoYJL2fUDwP5IWpY+N0egskMu0tmUcX+JTXtK9Jgk6DPk0ahH93d+iZCeuMqIOv6dLDKuaPmIuMDP3j+ASHG4ny7hsavgfFYZv8AKQR67j3aPcqXJaQMcbf6G54dxCBByIn3yvf6GWnFGMj63ounS6aEZLcFtaVFtSpUo0209Zl2kRq8SNhvMCFsskYNyiqGY8MMTbit2ObFz3iRAbtJnMeKQ80p7tgz533PVTHzH0Bn1KRKT7sdGN8IT17yHYMeiQ5vsyuGJVuhlb3zHsDHwTIIn5SYgGeR3ynwzbUyXLgqWpf9l1IhrpbscOa6D5tPUfvzYslO0L8q1T/Ro5fcMphxuKdEOcWiXQHOAbI2MxAjI5Ku4fHW4iMMWtvJ8XFsWf4VQugdTND4xUZjMY1M2I+vitUIZXvyD1nh+PItXDMXXY6nUdTf8zHFp9OY8Dv6qOScW0z5XJjcJOL7HHLBZQ8IWaD1GoWcCObCWziy2OUqTOQ9tISmVQGluAlsoiMaKUx8SToXI3YHdkokByWst12oNQA723RwkKyQM5f0grYM8/JEWNt5dATHsLirYybY42StZQsZmmISdo1NhfCla5IFR7CxgnvBriQXxykbE+m6q8xRx13aPqPDVrxQtbInavzI6A//ACErGtkWudrf5/uOra8gYz5mPwBT0yWTMhd3Oq5fUJ+ao7ygaQCP3yUuWUt67ngZupyJy0vZ3aPoXw9dgg6TpLt4jMTIjqC4/TkUrHJx4AwdXPDLbhgXxNxOqyQ9oc0/K9sjHiDsU2eWS549z2pdRKKU2ri+6Mnwq+0VXEcyD+syt6fJpf1K49TDMqXIH8R8FawdtR/yyQHN/ocZiP7Tt4eydkgkrR53UdKou1waH4O+FxUodtVcRqJLGiIgDDn+Ezjom4eijkjqmP6XoIupS/8AZsbHhAiXPcYwYAAnzyrVCEeWetkyaNthmOE0WU9QaT3dXzOkN69OfRTZHFrZEqyylOrAWXTWsDG56ZyXOdgT7+yj1bUipY7dv8pCPifFQxxYHyTknaADECepP7hTzyJOkz0MWFtW0Jyyqe8QQ05HMkdcZHqlaZvca8uNPSuV+flHLe7hrnAOcG7wRI2kifMe6KO0bBnJOSj3HfDeKidLpEhrmkjdpE7DmOnoN02M96YqeHVG4/lOvz79jRUb9wDSMFriCOm0fgVTHM0iGeBNtPdNWvz7FrqW1Wk2J+YN2B3kDoeioUmqlEn1Neib+gs47wa3uHGf5VctB1jIdiBrbzGInfColCOX5Miz+HrNHWuT59fMfRqOpVBD2mDzHUEHmCCD6qGacHTPncmN45OMgR1dKchZS64QuRxS+pKBsw7bHKU2cPbWohKIMZ2tVC0UQYxbVwltD0wevcwiUQJTKrW7krXHYGGTce2zpCnlsXw3I3dvK2MjJwsQ3vD5VUMhFkwiqhZ6XpznaJ446kOWW+FPqK1AwvD6DHEl5MD7rY1OPST8o2yAfLpbjgnuxXS9J57+JL9zlxUJdqxywMAACA0DkAAB6IZrez6FSjjiox4QXb8QDHd75XAEHoYgj6D3R6qIcnU+XOpcPcYjiLdw6QseRBebGS2ZmKtQ+rT+P6GPdY1Z4Lj2NFwLjEc8iD5wYP0P0U000hThsNeM8U7QUwJMvGBvEiR5Rq91kZOSpl2DM1heN+4ptLFvymfm0teD95u0joVqsZj6mWP4Sd2yo5nYuHzPa3G28z7CVRDI5ek9F9RDNDSuTem8ApCmG6IAa0QBHIDAwF6muo0j0cLUN+yGPDCHsqDnTaAB1mSXH2QN2mTZMjc1J9yP211KlRNUjs3N7MVGkkNa8jQKgIwWuDQT0BUjbjFXxxY+MFKctPKd17+9fXkz7roOdcMptirTfDATEiC0tH93ecfHkpW71Jc3sej8KhNu4tb177O/px9AOlaMBPaU+9z7QHV6h2y7HCO+pBzyN04y+z2/wM21qQEQ4A7jBGfHePdPTiifTJkq1k1lOW6TOqHAzLTEh3ttyWyVR2MU7l3+hRf0AKDHacgteR0AjS3/ANR/9kcknO6ipfQo6RtzklxVL/f3/YI4feHtqzXHGg1J5aXMBb6d5oQwm/NmnxVhZYReGDXN1+t7/sxjbXxeQ1mw3PUp+LK5tRjwR5sOhOUuRg5rSQKnzx8wPeAnA6HmvRhJJ0yTE5RTa49jC/xJokXLDmDQaA6I1aXvn1Ac33CT1a9afyPA8TX/ACp1yv5ZjqiiaPNK0tmHggMLaaFghVO4IWBqQZa3i4bGYybe4XaR6yC6+4jHNEoipTBOGcQl6Jx2BhJpm54ZWwFJkierhkN5BCnKwS5pCEyLFziZy6bD1XHg8+aqQxpOEBJa3KU9j5aHK08ktY0uwM+v4rUm2H5mR8ydfVhP2I6YLo8IwmqFdzV1FenlfMCfalh1SIHQnp0/eyCSa2GRnFvYjUbOnR80d4ch4E+WIXR+Zz33I2xcx4wfLIweUrZVRySH4vOzJYQ4wGmRn5mtdB26pEI2tkDJII4ZZ3NUOe1ulhMgvdpEgyC0QSc84hUQ6TJNWU4OlyZd0thhSs6ja2o1dYAJBA0kO2HM+OZVMem8t3dnpYuk8ud9jXsq9tbiTJiRJyD1HROlvEZF6Z0xH/jpo1RUggEaajem3vHLwKjnn0ST7dyxdNrg43vyiy54q6k4j/MtqvzUztLtyw/dJ8OaVlk8T94sf08FlXtNcP6cWd7JmrvOlrwDTrgSXtAgNqj7zmiGnZwgHIgJenem/o/9/llEcjinKKpr4o/yva/t+pI0qjB32Ncz7rwS5mejmkEf7XRzwicZR+JbAvJjyu4un3XD+ztfqgi2ZTOTM4wHADx3BP1RR0gtTXH5+wfqY8QGAAbkFxAjYbwUTkmtkCk18Uv2AuMXQ06Rt7qfLLYpwKmB8Hsa1UdlTADnhhe906W0mj+SzxMQ/wBWbZWY8M5x0LvVv5dl/JubPjhN5Z8RtRXu2/U/vt9zT2lsyhrIJc1gjV/U4QCfV2B6KvFGOFN9keflyTz0mqb7ey7f4AGXhLi4nJ/cIsMm/UzcsFGoonxjgv26myKnZvZq0hwJY6Y+bmD3dxPkcRdLH5sFueb13SSyxXyPnPGeGVbd/Z1mFrtxza4f1McMOH7MFefkhKDqR89lxSxupIUuKQxTRYwIGCX0qZKEyg6jaSuGxx2XmxXB+UC3FN4C5IFwaEd0905TYoxIhaVtLgUVGs2/B+JggZSJ4ynFlo0dC7wpXAvjk2IXF4IWxgZLLsZy8ugXqqMaRDOdyGFKrgJTW49PYwItSqTztxna0QAqoRSWwDZyu3OkHMTHh18Asm1Hds1ICr0icY/XxSYp5HfYdFpI9aWxbmMEknqmrHvbOlJdiN3nABkZGN+okJeTZ12CxjBtt21xS/oqU2PP+1g0uB9WR6oekhrlpfvuV4cOvKovg03E7uBAwBiOUL18kqR9BFULeGXgdU0nn+U4U0clujM6qNoecKvNLnMJ54Hgf2UUX2JpriSFPxPQI74GOag6mFbl3S5NqZXw25BphrhqbAweXkhhK1pfAyUd9UdmOrHh2uk5lGoc57NxjvDZ1N3J3gd+vVvkJxag/wBAP6pqaeRcd/8AfuQs61Wi8tFYBww4OBaR1BBP4rseqO2pG5HCavQ/0DanFm0x/MpMg/6lDQ0z0kAQfBzV05xj8Uf1RmPFKb9Mv0l/r/RQL9jstuI8K2tpHhrbqafOR5JFp8S+5X64qnjv/wCtP/Dp/uVXZpf6tcVCfu0ck+dZwA9g5BLR/c7+n+w8Xm8whpXvL/8AKf8Aoa8P4lc1nFtGgaVL7xEguJ3mo4beQT4ZMs9oxpfncmnhwYlcp21+cL+TUWtnTaz+fpdjAPyg/wBreqsjjjGPrIJ5Zzl/xX/Jna/AHso9qXgloBc2OXODOYS/6eUMWqy7+ohPKo0V2XEDP6J2DLY2cCXxtQFexe6JdSio08wARr9NM48FR1MNeJs8TxLp08bftufOLKzB7zvZeXCF8ny85VwGfZKfRF5UWBrZZSttPklSwNcDYTj3GtnbSppOi7HCxgbNL1FCxgN3Zo4yFTgZvitkqMe5HkVCR9tCbQvUXWlYsK5o2+5p7Piw05KTLEOhmpA9/wAX6FFHHRksrYlF+dUonEVvyaCjfd0JTiULJsVC0WWZoIPtVRHJsJcGga6a5rZnEjoFihGUrozfuU03c/35qpAl4dsiMKL1piW7iCPQ7eyXkjaG4pKMk3wE8KrmCGCNBdGZIpk94T/ua33U3TScMte57PSSrJt3CnXAduRK9JtSR63AvI0PDm7gypJLTK0c3qWlhz74Eh7cEckbmviQuMdtLHNpfMrN0u8iCienIhdPHKxbV4Y+gSWy6nuOZb4Hw8VFPG4O0WYsqkqZG34sGulsz1GyFZ1F7DXh1qmO72+bdUC90NuKfMf6lMZg9SBMeXimTl5sHJfEv2AxweDJpT9L/cU273cs+Y/NBjlJ/MblpcugxtZ4OdujcfVUJS7kbnHt/kKoccZTP8u3aXbk4z5u6rNcYuox3CWOc16pbB1Dil9U+Xs6Y8TOPILVPNLhJGeX00eW2HULGsXBzq7ap6TpI8pwt8md3J2HHqMcU0o0vuNrW9ZUBo1AHD5SCeh6jbIVcGprSwJY3tOIgbY9nWeyZaHEAnm3l6wlYcWibRbHI5wUu4Zx97W27xka2lkD+4YI8J/NW5Wo43Z5/Wyj5E9brZpP5vt+pgw2F5aPiWWArTCIqFbZwZw+9NN0nI5j8x4pWXEpr5lHT53jlvwa2m0OaHDYiQvJladM95U0mgO6ooosVkRmuMUwrMLPO6gz9doVRIgB5ysDRJryuMKaryuCSI0wsNY2ovwELRiZq6dIFSNlyiddbrlI3QB3lnLHDwPuMhMhkpoXLHsZymV6KIy4jEj2WmFZfKw2iND/ADWfd1SxxB31bE/vkpMqcfUW4XapWXWMA5GVZjo9XouqeaNS5QY9gOyKUbLAO4oqaeOzUDU672EQeaTFyizW72Zr+H8YEAP+vPy6q1ST5ESxtcBtS2tauSxs9R3T7hC8MJco2ObJHuQbwmgPlc5uCMOnB33lAuniuBr6qbVMpdw5jB3Hn1j9F0cWhbMyWZzfqQpuidUap+iRklK6sdjUauj1J5G34IVNoNxTO1+JPHda46jsB+KyWefYKGHHfqCuH06rvmc79+S3D5snux0/KXwxNfwqGgcv30XrYoqKEt6iinxGmaplxbqJIPI5OCP+/JbFq2Mqo0gHitQVqgDXTTZ7E8/P/tRdd1KT0xPnPEsnnZFjT9Mefr/1/sW8SshuzluFDize55ebAv7RWHKxNMiaaPFaYdBWo41vw3VmjB+64j03/NeX1arIe50Mrw17F9yVPEfNmZ40FXidHndQjLXkqtOyMAjKIKyyFphTUCwNHaa4xh7DhYYaWhegc1G4lcclB9O4BQUOU0ywCV10FyZXiVt2dRzeW48j6+Y9F6eGeqKZ5+WGmVA7XQmizlSnOW79Fj2NQNWOPEZHLIKVkSlEdik4yL33AcGOAiW5HQyZzzS8De6bHzk8M1LHsXUa2nP780+GR63F8FvSdbKcnHK18uwVTio4NmBzPh4eKc1qdHrpbBF9Z0mt7rZ88k+fJZLFFLg6K33Lal02sIRTqaN4KX29Ro7rj+Klmpx4ZnofIG69rsPelw6gZHmAk+bM7RFc7olUvqrhDZB8RA/VC8knywnGNelfchbUaoHegnrnKBr2CjqSp0Sd205aA3qCXH6jC5o2MpXutgu0qNGf36puOCNlJjNvFWtCsi0kK+pRV+INWBjGT/yi85PZMJZIp1asoqVxUA9/I+HX/hdOdEPiHiSwLy47yaffi/57nad25mxUMsUXyfLRyyjwG298H+amnj0lWPLq5FvEHiZG66E3Fi8lMhQcHjdXQakrJmqJFpCLgw0Hw3Xhjx/cPwXn9Wrkj1OhlUGvmGXFZTpFEpCW/IKfElybmavSAU+DI5ABTkDZIBEbZVUYuCTK2thYaENqLDjlS8IO6QkdQ04XxGcLHEOMqZqLKpMJEkWwdkuM8M7Vkt+duW+M7t3hHgzaJb8BZsOuO3JjXDMHcGPZepdnmcFdWrpE/RBOWlGpWVU3F5AgScb7+/NLU65QaRKrQIJpP7rwdTfI/NnoY+iSqc7XDKZK8f0KK1XR3ck7p2rTsTckmX5ABaIzB8ZK1Zmi/pOqnjdXaGbr0xDuapU7R7GLPDIriyi3qODpb6/vqkymobvgzP1WPFWt8j6z4k04dunqUZLYNOM1cWFmk12UuWJM1NoDvKYblKeJIZFthFqW4mM4To4kFTYyNoDsj8lAiXjNsxpA+9vjePFR9XJYlS5PP8R6p4YKMH6n+wu4dTa41MyWtnI2MxgqPJKcklfJ5ebPlyY/VLYnWEIl06TIeEdt3KtbCmWOpTzXNWYTo20OBBQyxpo2MqYJxI98hRyjToOTsEa8jZFGTXANhNvdkuGopnmyNSTHlpX0zBwcpU3r5K8Xo4LalyhURjkK725TEhE5CC5rSU1CGUAo0zC1rkdnEXOWmo41srDS0UChsIXvylo0ss6mkrmczXcLvNkmSH45mgo3oAlxAHikuDb2LI5EluKuLXFpVMkOLojUzHiN8FV4cWeK24+YjNkwSe/PyMzdW7p7gLmjbVAPqAqWp90SXFcHGW5bkfMBB8D1CU5JPc27BaVJ5LySSWkaZOwkkADkM/VZSbpFWv0KX3LalqHQ4AwcnnBG4WxqXPImcdL24B67IgeM/l+a7JxSCw82OqlIObp8IB5gxuqq2onjklGWqLotpsAbpAhBlinBoGcpTdydgHEKkNHIlwg+WT9F5uByjJ0P6TJPHO4sIsb+psRsAfQkhehHq416j2YeI42vXsWV74OBBwfzTHmxtXZUurwU5KSFbrx2sAnaD5Kf+ok1aPPj4nllFtJL8+o8o8XfTjSQ8mfm2HR2N1y6yaW6O/8AKZIx3ir/AD87ADrxznue8yXGT/x0CiyN5Hb5PHyTllyOcuWXURAOn72XHmc7eSoji4CyzpaCRCfRPZxjZK6jg6jREbyjSMZ2pULRshk6RiQtdTLjJ5rz3bYeki61K07SwR9IgyiMC7a8jBXUMjKiyrfraCeQW3d5KNIDkhZ2xflHwdQy/wAMws1B+WwK5sy1EpAuNC91TKOzaGvDaUhDJmxVjP7Ilah2gyiISeAWHDbhtUhdGGp0YpUFVahce8Z/D2VsIKK2BcnLk6xGYW0xO3r0HmeSxySOKbnGZ6bdVNn4ug0BUqjhUBA3aRnHl5qePp3ZVjWqDjZbaglxpu7oecEj5X8ifNMap6kDH1R0vkpubZwe0PEEF3kccjzC2eS6+p2NONhltVCrTJaCJjyXPg4WE9rU1D5GfV3Ree8elSooS0R+bGdahUYA7E4IyNpiD5zslxhJM6MXFqwN7tWYjw8eceCGWzoTmilPYDpUdVQjw/JOhukOg6x2NaPDoEDAhNlh1iZTtUyurbFs9PdTzhKHIKdcFtCoNOcQqcOTVEFqyqpcT8o9SmmpEWsncyi0nFgYFtGWWsuCPEdCslG1Rq5GNnoqbYPMHf06hQZMbhyUQqQS+0wlpjHjFt1ao0JlAz92C0oxNAzqhW0bpIsbJRBcGk4XSAAQNjMaHTKWEtspSBL63BCOLFziZK+todhPTJ+B5welgIJsbjW4+bQU+orUD541UHnlrGoQGxhb4CrxRqJwU1OBJOIG4z0GPdC32RqKjXJOduQGw9FyVGkbmoIAU/UzpaTkcpVBGkrcMlKFM1Np2iNxTc4QHn1gn3XeRFcDlnd20C0G1BU0OeS0ic7nwHigljipIo85zg6QJxCkdZGYG0+SKTadMmTRC3JbsT+SyzrLqd69nyxHSMey5TaN55DeFXtZ7oe7U0AAtgDE4Ixyyu0p8BSm+5O+4hTY8sEuIwTECfVIyYN7TFShbsnwprX6jOZmOYRxhq2NnOopIa6iFRHbYnbtlN1XABWTSkqZsULw8k59kOPGo8BEmnATTggIjC0BECeLVxxFlQtILTBH72QSipKmEm07RrKB1sa6IkAryZLTJo9SPqimCXdFFFi5xMlxilBlPRDJUxQURoRbboWC3uaCwqjCAbjY7pvwgZWmD3DsIkDIzl20a5TkyR8jrhcJc2U4qHzAIUxaqPmjaauo8ZsuYxA1RiL2OVyCCQ+PPl+pXXZhW8GZ67reDT1R2kTzQZJqKs4DLiTJUMnbtgMnTKyM3B2jUwlpV0MilwEcr0y4Y+YZafHp6opx1Kg8c9MrBiw1BrHqPLCQ7av7hZVpl8mUmggAs92KFnWRLnNOEUXQSZF9Ivdrcckyce8rnK3Rt9gzh7C14dyEyeUIY7SsXKLXI9ORjOJ3/NMlnipUL0ijiDyHBpBHPP7yjsNIqpvyiTNaO0KkmBnyWpmNBzKD94geJRpMFtBNO3PM+yKjGy7sh5+a2gbOso6nBo5/uUGSShGw4R1OjQisAABsBC8em3Z6ikkqBLquIRxQuUjK8YqApyIpvcSDdEcE0QgYthNG50lckbF0Pba9BC5xKoz2B7y+ACJRBlMRXF1JR0K5HHCK5wlyQ3HI0lOrgJDRapbGK0L0GjyjiXNdzUeohURdoJhLGyjWwJ11QDxPglTzRRtAz5JkqOc3J2zGR0ILBPaFxxOVi2do0nTqDmrMedPaRp2k0tqd3Ifkcu+OXqjk9EtXZlEf+SGnujpe0zjSQYIIWSinwIokyiDtCU0Y2y2lbNdsRODHUTmPSVySboZGDqwbi4Y0sa0byT1/ZymTjFHRbKftD2nRjTy/fVDVGy9XIzs71gMyTgA8oEbwtjGOrULlFkbi8pVmlpa6R8rhGPHy8EyLjJUclQNSs2tyTqI9B7IlD3Ncg0NEd2B4I69gPqW0aiJMFlwK04490LGzim2vhJhQZpa2Og9ISeIDqk6RvmC+74itoTLJYor1S5EhdlGlaFZdTQsAg7daji+nVIRGplVxUJ3WoJbgjN1oY+4W7ZLZsOR8yrhBRUpGdcxXtEBVzScnBsSb8bJaySSoJorkncoXKT5ZyQSymEIdEuxWGaCYptG61Rb4N0pclDyOSasHuLddil5WvAuxhDHNKlia4NOVZAx5jzGyyMpcdgoPS7C61YOY2r17rv8AcBv6qrHk2pjMsf7kV0SDsm0mJJ5Y8OHX/tTzx6HcRuKW9MIvKeglxAIMEHmJ2Hlla5XtI2tM6FtQGMnYYEYJ2EoZSa2NUbZUzAdEyQDmMn9FqbBktztsYB6nJPimw4AYex/NNTALqbo8ltmMv1c1tmFde9azdDKaRqjYoveIOfjYdOvmp55HLYNJIBF0QYQaTdI2t7Wo4AkwiWJsW2kFfY2xlF5KBsqFm2VixI6zzrNvkteFHWUvsjyKB4mbsCOEGCl1R1F9IStRqRC7pYRIJADN1wQ2sKkIGZEdNrYQ0UJn/9k=",
     update:"15 min ago"
                       
     },
             {
                 id:2,
     name:"suravi",
     userId:2,
     profilePic:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     desc:"hi bondhu",
     img:"https://media.istockphoto.com/id/1737182367/photo/mongolian-man-enjoying-breakfast-homemade-butter-with-bread-in-yurt.webp?b=1&s=170667a&w=0&k=20&c=t8Zr-_aR7SxMaiL8R-9d_tx_1bMtLoICrnb3a0t4ABU=",
     likes:15,
     update:"27 min ago"
     
     
     
     
             },
             
         
         ]
         const [commentOpen,setCommentOpen]=useState(false)
        //  const liked=false;
        const[post,setPost]=useState(secondposts)
        const handlelike=(id)=>{
          setPost(post.map(post=>post.id===id ? {...post,likes:post.likes+1}: post))
         }
         return (<div className="posts" >
     {post.map(post=>((<div className="post">
                <div className="container">
                <div className="user">
                  <div className="userInfo">
                <img src={post.profilePic} alt=""/>
                <div className="details">
                  
      <div className="name">{post.name}</div>
      <div className="date">{post.update}</div>
                  
                  
                </div>
                </div>
      
                <MdMoreHoriz/>
                  </div>
                  <div className="content">
      <p>{post.desc}</p>
      <img src={post.img} alt=""/>
      
                  </div>
                  <div className="info">
                    <div className="likes">
       <FaHeart onClick={()=>handlelike(post.id)}/>
        <span>{post.likes}Likes</span>
        </div>
        <div className="comment" onClick={()=>setCommentOpen(!commentOpen)}>
        <MdOutlineTextsms/>
        <span>Comment</span>
        </div>
        <div className="share">
        <CiShare2/>
        <span>Share</span>
        </div>
                  </div>
                {commentOpen && <Comments/>}
                </div>
              </div>
            
     )
     ))}
     </div>
         )
        }
         
         
    
     
    
    

export default Secondfriend;