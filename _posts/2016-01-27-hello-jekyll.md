---
title: Some Page title Wa
permalink: short-and-clean-bro
---

Und hier so der excerpt.

Und dann so der content wa.

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
